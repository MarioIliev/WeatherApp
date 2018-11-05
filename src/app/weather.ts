export class Weather {
    'location': {
        'localtime': String
    }
    'current': {
        'condition': {
            'code': String,
            'icon': String,
            'text': String
        }
    }
    'forecast': {
        'forecastday': [
            {
                'condition': {
                    'code': String,
                    'icon': String,
                    'text': String
                }
            }
        ]
    }
}