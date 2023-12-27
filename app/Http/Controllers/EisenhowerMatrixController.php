<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EisenhowerMatrixController extends Controller
{
    public function index()
    {
        return inertia("eisenhower-matrix");
    }
}
