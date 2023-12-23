<x-auth.layout>
    <title>Create New Dashboard Account</title>
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
                                        <h4 class="nk-block-title">Register</h4>
                                        <div class="nk-block-des">
                                            <p>Create New Dashboard Account</p>
                                        </div>
                                    </div>
                                </div>
                                <form method="POST" action="{{ route('register') }}">
                                    @csrf
                                    <x-auth.input id="name" placeholder="Enter your full name">
                                        Name
                                    </x-auth.input>
                                    <x-auth.input id="username" placeholder="Pick your username">
                                        Username
                                    </x-auth.input>
                                    <x-auth.input id="email" type="email" placeholder="Enter your email">
                                        Email
                                    </x-auth.input>
                                    <x-auth.input id="password" type="password" placeholder="Enter your password">
                                        Password
                                    </x-auth.input>
                                    <x-auth.input id="password_confirmation" type="password"
                                        placeholder="Enter your password again">
                                        Confirm Password
                                    </x-auth.input>

                                    <div class="form-group">
                                        <div class="custom-control custom-control-xs custom-checkbox">
                                            <input type="checkbox" class="custom-control-input invalid" id="checkbox"
                                                name="agreement" />
                                            <label class="custom-control-label" for="checkbox">
                                                I agree to Dashboard
                                                <a href="#">Privacy Policy</a>
                                                &amp;
                                                <a href="#"> Terms.</a>
                                            </label>
                                        </div>
                                        @error('agreement')
                                            <div><small class="text-danger">{{ $message }}</small></div>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-lg btn-primary btn-block" type="submit">
                                            Register
                                        </button>
                                    </div>
                                </form>
                                <div class="form-note-s2 text-center pt-4">
                                    Already have an account?
                                    <a href="{{ route('login') }}">
                                        <strong>Sign in instead</strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <x-auth.footer />
                </div>
            </div>
        </div>
    </div>
</x-auth.layout>
