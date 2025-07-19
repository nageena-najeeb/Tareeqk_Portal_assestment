<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Towing extends Model
{

    protected $table = 'towing';

    protected $fillable = [
        'customer_name',
        'location',
        'note',
        'status',
    ];
}
