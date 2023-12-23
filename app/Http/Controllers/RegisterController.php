<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(Request $request){
        $validatedRequest = $request->validate([
            'name' => 'required|string|min:2|max:256',
            'username' => 'required|string|min:2|max:256|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:8|max:256',
            'agreement' => 'accepted',
        ]);
        User::create($validatedRequest);
        return redirect()->route("login");
    }
    public function view(){
        return view('register');
    }
}
