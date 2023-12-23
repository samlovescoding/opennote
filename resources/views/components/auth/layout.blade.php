<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="js">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/assets/images/favicon.png" />
    <link rel="stylesheet" href="/assets/css/dashlite.css?ver=3.2.2" />
    <link rel="stylesheet" href="/assets/css/theme.css?ver=3.2.2" />
</head>

<body class="nk-body bg-lighter npc-default has-sidebar">
    {{ $slot }}
    <script>
        document.querySelectorAll(".passcode-switch").forEach(passcodeSwitch => {
            passcodeSwitch.addEventListener('click', event => {
                event?.preventDefault();
                const targetInputId = passcodeSwitch.getAttribute("data-target")
                const target = document.querySelector(`#${targetInputId}`)
                if (target) {
                    const currentType = target.getAttribute("type")
                    const type = currentType === 'password' ? 'text' : 'password'
                    target.setAttribute("type", type)
                }
            })
        })
    </script>
</body>

</html>
