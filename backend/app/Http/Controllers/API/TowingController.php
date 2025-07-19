<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Towing;

class TowingController extends Controller
{
   // to display all
    public function index()
    {
        return Towing::all();
    }
   
//    to store data
    public function store(Request $request)
    {
        $data = $request->validate([
            'customer_name' => 'required',
            'location' => 'required',
            'note' => 'nullable',
        ]);
        $request = Towing::create($data);
        return response()->json($request, 201);
    }
}
