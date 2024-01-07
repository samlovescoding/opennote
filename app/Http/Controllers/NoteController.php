<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index()
    {
        return inertia("notes/index");
    }
    public function create()
    {
        return inertia("notes/create");
    }
}
