<?php

namespace App\Http\Controllers;

use App\Models\Resort;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResortController extends Controller
{
    public function index()
    {
        $resorts = Resort::latest()->get();
        return Inertia::render('Resorts/Index', ['resorts' => $resorts]);
    }

    public function create()
    {
        return Inertia::render('Resorts/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price_per_night' => 'required|numeric',
            'image_url' => 'nullable|url',
        ]);

        Resort::create($request->all());
        return redirect()->route('resorts.index')->with('success', 'Resort created successfully.');
    }

    public function edit(Resort $resort)
    {
        return Inertia::render('Resorts/Edit', ['resort' => $resort]);
    }

    public function update(Request $request, Resort $resort)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price_per_night' => 'required|numeric',
            'image_url' => 'nullable|url',
        ]);

        $resort->update($request->all());
        return redirect()->route('resorts.index')->with('success', 'Resort updated successfully.');
    }

    public function destroy(Resort $resort)
    {
        $resort->delete();
        return redirect()->route('resorts.index')->with('success', 'Resort deleted successfully.');
    }
}