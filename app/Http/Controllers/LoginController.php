<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public string $attemptMessage = "This credentials combination doesn't exist. <br /> Please try again.";

    public function store(Request $request){
        $validatedRequest = $request->validate([
            "username" => "required|string",
            "password" => "required|string"
        ]);
        $identifier = $validatedRequest["username"];
        $user = User::where("username", $identifier)
                    ->orWhere("email", $identifier)
                    ->first();

        if (!$user) {
            return redirect()->back()->with("error", $this->attemptMessage);
        }
        auth()->login($user);
        return redirect()->route('home');
    }

    public function view(){
        return view('login');
    }
}
