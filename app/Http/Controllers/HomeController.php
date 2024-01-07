<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        dd("This controller should not be used any more. Use NoteController instead.");
        return inertia("index");
    }
}
