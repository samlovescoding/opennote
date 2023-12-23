<x-auth.layout>
    <title>Access the Dashboard panel using your email and password.</title>
    <div class="nk-app-root">
        <div class="nk-main">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content">
                    <div class="nk-block nk-block-middle nk-auth-body wide-xs">
                        <div class="brand-logo pb-4 text-center">
                            <a href="/" class="logo-link">
                                <img class="logo-light logo-img logo-img-lg" src="/assets/images/logo.png"
                                    srcset="/assets/images/logo2x.png 2x" alt="logo" />
                                <img class="logo-dark logo-img logo-img-lg" src="/assets/images/logo-dark.png"
                                    srcset="/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
                            </a>
                        </div>
                        <div class="card">
                            <div class="card-inner card-inner-lg">
                                <div class="nk-block-head">
                                    <div class="nk-block-head-content">
                                        <h4 class="nk-block-title">Sign-In</h4>
                                        <div class="nk-block-des">
                                            <p>Access the Dashboard panel using your email and password.</p>
                                        </div>
                                    </div>
                                </div>
                                <form method="POST" action="{{ route('login') }}">
                                    @csrf
                                    <x-auth.input id="username" placeholder="Enter your email or username">
                                        Email or Username
                                    </x-auth.input>
                                    <x-auth.input id="password" type="password" placeholder="Enter your password">
                                        Password
                                    </x-auth.input>
                                    <x-errors />
                                    <div class="form-group">
                                        <button class="btn btn-lg btn-primary btn-block" type="submit">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <div class="form-note-s2 text-center pt-4">
                                    New on our platform?
                                    <a href="{{ route('register') }}">
                                        <strong>Create an account</strong>
                                    </a>
                                </div>
                                <div class="text-center pt-4 pb-3">
                                    <h6 class="overline-title overline-title-sap">
                                        <span>OR</span>
                                    </h6>
                                </div>
                                <ul class="nav justify-center gx-8">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Facebook</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Google</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <x-auth.footer />
                </div>
            </div>
        </div>
    </div>
</x-auth.layout>
