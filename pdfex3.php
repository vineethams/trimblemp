<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\Style\Font;

// Function to retrieve folder contents and extract PDF links
function getPdfLinks($folderUrl, $bearerToken)
{
    $headers = [
        "Authorization: Bearer $bearerToken"
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $folderUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        $folderContents = json_decode($response, true);
        $pdfFiles = [];

        // Handle response based on type
        $items = $folderContents['items'] ?? $folderContents;

        // Process the items to extract PDFs
        foreach ($items as $item) {
            if (isset($item['type']) && $item['type'] === 'FILE' && str_ends_with(strtolower($item['name']), '.pdf')) {
                $pdfFiles[] = [
                    'name' => $item['name'],
                    'url' => $item['id'] ?? 'No URL Available'
                ];
            }
        }
        return $pdfFiles;
    } else {
        echo "Failed to retrieve folder contents. Status code: $httpCode\n";
        echo $response;
        return [];
    }
}

// Function to create an Excel file with PDF names and URLs
function createExcelWithLinks($pdfFiles, $urlInput, $outputFilename = "TrimblePdf_links.xlsx")
{
    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();
    $sheet->setTitle("PDF Links");

    // Add headers
    $sheet->setCellValue('A1', 'File Name');
    $sheet->setCellValue('B1', 'Link');
    $sheet->getStyle('A1:B1')->getFont()->setBold(true);

    // Extract project ID
    $urlParts = parse_url($urlInput);
    $pathParts = explode('/', $urlParts['path']);
    $projectId = $pathParts[array_search('projects', $pathParts) + 1];

    // Insert PDF names and URLs
    $rowIndex = 2;
    foreach ($pdfFiles as $pdf) {
        $pdfName = str_ends_with(strtolower($pdf['name']), '.pdf') ? substr($pdf['name'], 0, -4) : $pdf['name'];
        $sheet->setCellValue("A$rowIndex", $pdfName);

        $link = "https://web.connect.trimble.com/projects/$projectId/viewer/2D?id=" . $pdf['url'];
        $sheet->setCellValue("B$rowIndex", '=HYPERLINK("' . $link . '", "' . $pdfName . '")');

        // Apply hyperlink styling
        $sheet->getStyle("B$rowIndex")->getFont()->getColor()->setARGB('FF0000FF');
        $sheet->getStyle("B$rowIndex")->getFont()->setUnderline(Font::UNDERLINE_SINGLE);

        $rowIndex++;
    }

    // Adjust column width
    $sheet->getColumnDimension('A')->setWidth(40);
    $sheet->getColumnDimension('B')->setWidth(30);

    // Save the spreadsheet
    $writer = new Xlsx($spreadsheet);
    $writer->save($outputFilename);
    echo "Spreadsheet created: $outputFilename\n";
}

// Check if form data is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form input
    $urlInput = $_POST['url'];
    $regionInput = $_POST['region'];
    $bearerToken = $_POST['token'];

    // Parse the folder ID from the URL
    $parsedUrl = parse_url($urlInput);
    $pathParts = explode('/', $parsedUrl['path']);
    $folderId = end($pathParts);

    // Determine the correct API URL based on the region
    switch ($regionInput) {
        case 'na':
            $folderUrl = "https://app.connect.trimble.com/tc/api/2.0/folders/$folderId/items";
            break;
        case 'au':
            $folderUrl = "https://app32.connect.trimble.com/tc/api/2.0/folders/$folderId/items";
            break;
        case 'as':
            $folderUrl = "https://app31.connect.trimble.com/tc/api/2.0/folders/$folderId/items";
            break;
        case 'eu':
            $folderUrl = "https://app21.connect.trimble.com/tc/api/2.0/folders/$folderId/items";
            break;
        default:
            echo "Invalid region input.\n";
            exit;
    }

    // Get PDF links and create Excel file
    $pdfFiles = getPdfLinks($folderUrl, $bearerToken);

    if (!empty($pdfFiles)) {
        createExcelWithLinks($pdfFiles, $urlInput);
    }
}
?>

