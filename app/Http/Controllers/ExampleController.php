<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $produtos =
            [
                [
                    'id' => 1,
                    'descrição' => 'Pen drives',
                    'valor' => '8988',
                    'código' => '324wert'
                ],
                [
                    'id' => 2,
                    'descrição' => 'Relógios',
                    'valor' => '2331',
                    'código' => 'wt554'
                ],
                [
                    'id' => 3,
                    'descrição' => 'Perfumes',
                    'valor' => '213123',
                    'código' => '534tv45'
                ],
                [
                    'id' => 4,
                    'descrição' => 'Tablets',
                    'valor' => '345',
                    'código' => 'x3453c4'
                ],
                [
                    'id' => 5,
                    'descrição' => 'Malas',
                    'valor' => '231',
                    'código' => '3t54tv'
                ],
                [
                    'id' => 6,
                    'descrição' => 'TV LED',
                    'valor' => '21321',
                    'código' => '345xt3'
                ],
                [
                    'id' => 7,
                    'descrição' => 'Nikon D5100',
                    'valor' => '453',
                    'código' => 'b576b5'
                ],
                [
                    'id' => 8,
                    'descrição' => 'Samsung Galaxy S4',
                    'valor' => '121',
                    'código' => 'bb675b65'
                ],
                [
                    'id' => 9,
                    'descrição' => 'Cartão de memória',
                    'valor' => '43545',
                    'código' => 'vbbu657'
                ],
                [
                    'id' => 10,
                    'descrição' => 'Lembrancinha de festas',
                    'valor' => '1231',
                    'código' => '75b7b'
                ],
                [
                    'id' => 11,
                    'descrição' => 'Redmi Note 9S',
                    'valor' => '4353',
                    'código' => 'v75758'
                ],
                [
                    'id' => 12,
                    'descrição' => 'iPhone 12S Pro Max',
                    'valor' => '3424',
                    'código' => 'b577657n'
                ],
                [
                    'id' => 13,
                    'descrição' => 'Kit para unhas em gel',
                    'valor' => '1313123',
                    'código' => 'v57v'
                ],
                [
                    'id' => 14,
                    'descrição' => 'Samsung A01',
                    'valor' => '6545',
                    'código' => 'v5bbu'
                ],
                [
                    'id' => 15,
                    'descrição' => 'Capa de chuva para motoqueiro',
                    'valor' => '4654',
                    'código' => '6yb4'
                ],
                [
                    'id' => 16,
                    'descrição' => 'Capacho',
                    'valor' => '75656',
                    'código' => 'wer5'
                ]
                ,
                [
                    'id' => 17,
                    'descrição' => 'Churrasqueira tijolinho',
                    'valor' => '43545',
                    'código' => 'wxrfw44'
                ]
                ,
                [
                    'id' => 18,
                    'descrição' => 'Mousepad gamer',
                    'valor' => '54656',
                    'código' => 'xqwefew34'
                ]
                ,
                [
                    'id' => 19,
                    'descrição' => 'Placa de vídeo 4GB',
                    'valor' => '5464',
                    'código' => 'xwerfrw'
                ]
                ,
                [
                    'id' => 20,
                    'descrição' => 'Chevette',
                    'valor' => '34',
                    'código' => 'ewcq4ver'
                ]
            ];

        return response()->json($produtos);
    }
}
