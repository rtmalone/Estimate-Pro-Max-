const material = [
    {
        id: 'm1',
        category: 'material',
        name: 'Lumber',
        cost: 8.00,
        unit: 'board ft'
    },
    {
        id: 'm2',
        category: 'material',
        name: 'Sheet Rock',
        cost: 25.50,
        unit: 'sheet'
    },
    {
        id: 'm3',
        category: 'material',
        name: 'Shingles',
        cost: 42.20,
        unit: 'package'
    }
]

const labor = [
    {
        id: 'l1',
        category: 'labor',
        name: 'Carpentry',
        cost: 45.00,
        unit: 'hour'
    },
    {
        id: 'l2',
        category: 'labor',
        name: 'Dry Wall',
        cost: 47.00,
        unit: 'hour'
    },
    {
        id: 'l3',
        category: 'labor',
        name: 'Roofing',
        cost: 62.00,
        unit: 'hour'
    }
]

const inclusive = [
    {
        id: 'i1',
        category: 'inclusive',
        name: 'Carpentry Crew & Materials',
        cost: 2200.00,
        unit: 'day'
    },
    {
        id: 'i2',
        category: 'inclusive',
        name: 'Dry Wall Crew & Materials',
        cost: 3100.00,
        unit: 'day'
    },
    {
        id: 'i3',
        category: 'inclusive',
        name: 'Roofing Crew & Materials',
        cost: 5300.00,
        unit: 'day'
    }
]

const constants = {
    MATERIAL_SECTION_NAME: 'Material',
    LABOR_SECTION_NAME: 'Labor',
    INCLUSIVE_SECTION_NAME: 'Inclusive'
}


export { material, labor, inclusive, constants };