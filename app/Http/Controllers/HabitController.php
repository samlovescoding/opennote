<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HabitController extends Controller
{
    public function index()
    {
        return inertia("habits");
    }
}
