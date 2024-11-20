<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require 'vendor/autoload.php';

    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

    // Function to fetch PDFs from the folder URL
    function fetchPdfLinks($folderUrl, $bearerToken)
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
            $data = json_decode($response, true);
            $pdfFiles = [];

            // Extract PDF file names and IDs
            foreach ($data['items'] as $item) {
                if (isset($item['type']) && $item['type'] === 'FILE' && str_ends_with(strtolower($item['name']), '.pdf')) {
                    $pdfFiles[] = [
                        'name' => $item['name'],
                        'url' => $item['id']
                    ];
                }
            }
            return $pdfFiles;
        } else {
            die("Failed to fetch PDFs. HTTP Status Code: $httpCode");
        }
    }

    // Function to save PDFs to an Excel file
    function saveToExcel($pdfFiles)
    {
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle("PDF List");

        // Set headers
        $sheet->setCellValue('A1', 'File Name');
        $sheet->setCellValue('B1', 'File URL');
        $sheet->getStyle('A1:B1')->getFont()->setBold(true);

        // Populate rows with PDF data
        $row = 2;
        foreach ($pdfFiles as $pdf) {
            $sheet->setCellValue("A$row", $pdf['name']);
            $sheet->setCellValue("B$row", $pdf['url']);
            $row++;
        }

        // Save the Excel file
        $fileName = "pdf_list.xlsx";
        $writer = new Xlsx($spreadsheet);
        $writer->save($fileName);

        return $fileName;
    }

    // Handle form submission
    $folderUrl = $_POST['folderUrl'];
    $bearerToken = $_POST['bearerToken'];

    $pdfFiles = fetchPdfLinks($folderUrl, $bearerToken);

    if (!empty($pdfFiles)) {
        $fileName = saveToExcel($pdfFiles);
        echo "<p>Excel file '<strong>$fileName</strong>' created successfully! <a href='$fileName' download>Download it here</a>.</p>";
    } else {
        echo "<p>No PDF files found in the provided folder.</p>";
    }
} else {
    ?>
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="icon" href="https://components.connect.trimble.com/trimble-connect-project-workspace-api/favicon.ico"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="https://components.connect.trimble.com/trimble-connect-project-workspace-api/logo192.png"/>
        <link rel="manifest" href="https://vineethams.github.io/trimblemp/extension-manifest.json"/>
        <title>Export to excel</title>
        <link href="https://components.connect.trimble.com/trimble-connect-project-workspace-api/static/css/2.46f1d6ec.chunk.css" rel="stylesheet">
        <link href="https://components.connect.trimble.com/trimble-connect-project-workspace-api/static/css/main.a2c16014.chunk.css" rel="stylesheet">
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                padding: 20px;
                max-width: 600px;
            }
            label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
            }
            input[type="text"], input[type="password"], button {
                width: 100%;
                padding: 10px;
                margin-bottom: 20px;
                box-sizing: border-box;
            }
            button {
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
            }
            button:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        
        <form action="" method="POST">
            <label for="folderUrl">Folder URL:</label>
            <input type="text" id="folderUrl" name="folderUrl" placeholder="Enter the folder URL" required>

            <label for="bearerToken">Bearer Token:</label>
            <input type="password" id="bearerToken" name="bearerToken" placeholder="Enter the Bearer Token" required>

            <button type="submit">Process PDFs</button>
        </form>
        <script>
        !function(e) {
                function t(t) {
                    for (var n, a, i = t[0], c = t[1], l = t[2], s = 0, f = []; s < i.length; s++)
                        a = i[s],
                        Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]),
                        o[a] = 0;
                    for (n in c)
                        Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
                    for (p && p(t); f.length; )
                        f.shift()()
                    return u.push.apply(u, l || []),
                    r()
                }
                function r() {
                    for (var e, t = 0; t < u.length; t++) {
                        for (var r = u[t], n = !0, i = 1; i < r.length; i++) {
                            var c = r[i];
                            0 !== o[c] && (n = !1)
                        }
                        n && (u.splice(t--, 1),
                        e = a(a.s = r[0]))
                    }
                    return e
                }
                var n = {}
                  , o = {
                    1: 0
                }
                  , u = [];
                function a(t) {
                    if (n[t])
                        return n[t].exports;
                    var r = n[t] = {
                        i: t,
                        l: !1,
                        exports: {}
                    };
                    return e[t].call(r.exports, r, r.exports, a),
                    r.l = !0,
                    r.exports
                }
                a.e = function(e) {
                    var t = []
                      , r = o[e];
                    if (0 !== r)
                        if (r)
                            t.push(r[2]);
                        else {
                            var n = new Promise((function(t, n) {
                                r = o[e] = [t, n]
                            }
                            ));
                            t.push(r[2] = n);
                            var u, i = document.createElement("script");
                            i.charset = "utf-8",
                            i.timeout = 120,
                            a.nc && i.setAttribute("nonce", a.nc),
                            i.src = function(e) {
                                return a.p + "static/js/" + ({}[e] || e) + "." + {
                                    3: "15105964"
                                }[e] + ".chunk.js"
                            }(e);
                            var c = new Error;
                            u = function(t) {
                                i.onerror = i.onload = null,
                                clearTimeout(l);
                                var r = o[e];
                                if (0 !== r) {
                                    if (r) {
                                        var n = t && ("load" === t.type ? "missing" : t.type)
                                          , u = t && t.target && t.target.src;
                                        c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")",
                                        c.name = "ChunkLoadError",
                                        c.type = n,
                                        c.request = u,
                                        r[1](c)
                                    }
                                    o[e] = void 0
                                }
                            }
                            ;
                            var l = setTimeout((function() {
                                u({
                                    type: "timeout",
                                    target: i
                                })
                            }
                            ), 12e4);
                            i.onerror = i.onload = u,
                            document.head.appendChild(i)
                        }
                    return Promise.all(t)
                }
                ,
                a.m = e,
                a.c = n,
                a.d = function(e, t, r) {
                    a.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                a.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                a.t = function(e, t) {
                    if (1 & t && (e = a(e)),
                    8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var r = Object.create(null);
                    if (a.r(r),
                    Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                        for (var n in e)
                            a.d(r, n, function(t) {
                                return e[t]
                            }
                            .bind(null, n));
                    return r
                }
                ,
                a.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    }
                    : function() {
                        return e
                    }
                    ;
                    return a.d(t, "a", t),
                    t
                }
                ,
                a.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                a.p = "/trimble-connect-project-workspace-api/",
                a.oe = function(e) {
                    throw console.error(e),
                    e
                }
                ;
                var i = this["webpackJsonpmy-test-app"] = this["webpackJsonpmy-test-app"] || []
                  , c = i.push.bind(i);
                i.push = t,
                i = i.slice();
                for (var l = 0; l < i.length; l++)
                    t(i[l]);
                var p = c;
                r()
            }([])
        </script>
        <script src="https://components.connect.trimble.com/trimble-connect-project-workspace-api/static/js/2.209796c4.chunk.js"></script>
        <script src="https://vineethams.github.io/trimblemp/nktrimble.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>  
    </body>
    </html>

    <?php
}
?>
