<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="js">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/assets/images/favicon.png" />
    <link rel="stylesheet" href="/assets/css/dashlite.css?ver=3.2.2" />
    <link rel="stylesheet" href="/assets/css/theme.css?ver=3.2.2" />
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body class="nk-body bg-lighter npc-default has-sidebar">
    @inertia
    {{-- <script src="/assets/js/bundle.js?ver=3.2.2"></script> --}}
    {{-- <script src="/assets/js/scripts.js?ver=3.2.2"></script> --}}
</body>

</html>
