<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KeyCode Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        .container {
            text-align: center;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 10px;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 24px;
        }
        .key-info {
            margin-top: 20px;
            font-size: 18px;
        }
        .key-info span {
            display: block;
            margin-top: 10px;
        }
        /* Optional: Styles for mobile */
        @media (max-width: 600px) {
            .input-box {
                display: block;
                margin-top: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to the KeyCode Generator</h1>
        <p>Press any key to get its key code information!</p>
        <div class="key-info">
            <span id="keyCode">Key Code: </span>
            <span id="key">Key: </span>
            <span id="charCode">Char Code: </span>
        </div>
        <!-- Optional input for mobile -->
        <input class="input-box" type="text" placeholder="Tap here and press a key" style="display: none;">
    </div>

    <script>
        // Add event listener for any key press
        document.addEventListener('keydown', function(event) {
            // Get the key information
            const keyCode = event.code;
            const key = event.key;
            const charCode = event.charCode || event.keyCode; // charCode is deprecated

            // Display the values in the corresponding elements
            document.getElementById('keyCode').textContent = 'Key Code: ' + keyCode;
            document.getElementById('key').textContent = 'Key: ' + key;
            document.getElementById('charCode').textContent = 'Char Code: ' + charCode;
        });

        // Optional: Show input box on small devices
        if (window.innerWidth < 600) {
            document.querySelector('.input-box').style.display = 'block';
        }
    </script>
</body>
</html>
