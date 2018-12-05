INSERT INTO HOUSING (
    sales_id, 
    address, 
    city, 
    proptype, 
    rooms, 
    funiture, 
    animals, 
    size, 
    floor, 
    shareable, 
    energy, 
    period, 
    rent, 
    deposit,
    aconto,
    startperiod, 
    created
) 
VALUES 
    (
        001, 
        'Langelandsvej',
        '2000 Frederiksberg',
        'Lejlighed', 
        4, 
        True, 
        False, 
        82, 
        'Stuen', 
        False,
        'A',
        '2+ år', 
        15000, 
        45000, 
        0, 
        '15/01/2019', 
        '18/11/2018'
    ),
    (
        002,
        'Robert Jacobsens Vej',
        '2300 København S',
        'Lejlighed',
        4,
        False,
        False,
        79,
        '8. sal',
        True,
        'B',
        'Ubegrænset',
        14730,
        44190,
        700,
        '01/01/2019',
        '09/11/2018'
    ), 
    (
        003,
        'Vesterfælledvej',
        '1799 København V',
        'Lejlighed',
        1,
        False,
        False,
        49,
        '3. sal',
        False,
        '-',
        '2´år',
        11500,
        34500,
        750,
        '15/12/2018',
        '24/09/2018'
    ),
    (
        004,
        'Vigerslevvej',
        '2500 Valby',
        'Værelse',
        1,
        True,
        False,
        12,
        'Stuen',
        False,
        '-',
        '2-12 mdr.',
        4200,
        4000,
        0,
        '29/11/2018',
        '19/11/2018'
    ), 
    (
        005,
        'Andreas Bjørns Gade',
        '1428 København K',
        'Værelse',
        1,
        True,
        False,
        20,
        '1. sal',
        False,
        '-',
        '2-12 mdr.',
        5700,
        7500,
        0,
        'Snarest',
        '12/11/2018'
    ), 
    (
        006,
        'Artilerivej',
        '2300 København S',
        'Lejlighed',
        3,
        False,
        True,
        129,
        '10. sal',
        False,
        '-',
        'Ubegrænset',
        17948,
        53754,
        1400,
        'Snarest',
        '07/11/2018'
    ),
    (
        007,
        'Sankt Hans Gade',
        '2200 København H',
        'Værelse',
        1,
        False,
        False,
        13,
        '5. sal',
        False,
        '-',
        '2-12 mdr.',
        6300,
        6300,
        0,
        '01/12/2018',
        '06/11/2018'
    ), 
    (
        008,
        'Frederikssundsvej',
        '2700 Brønshøj',
        'Værelse',
        1,
        True,
        False,
        20,
        '1. sal',
        False,
        'A',
        'Ubegrænset',
        3900,
        5900,
        0,
        '15/01/2018',
        '20/11/2018'
    );