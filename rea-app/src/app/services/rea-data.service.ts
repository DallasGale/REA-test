import { Injectable } from '@angular/core';

@Injectable()
export class ReaDataService {

    getReaData() {
        return reaData;
    }

    getSideMenuItems() {
        return sideMenu
    }
}

const reaData = [{
    "results": [{
        "price": "$726,500",
        "agency": {
            "brandingColors": {
                "primary": "#ffe512"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
        },
        "id": "1",
        "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
    },
    {
        "price": "$560,520",
        "agency": {
            "brandingColors": {
                "primary": "#fcfa3b"
            },
            "logo": "http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif"
        },
        "id": "2",
        "mainImage": "http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg"
    },
    {
        "price": "$826,500",
        "agency": {
            "brandingColors": {
                "primary": "#57B5E0"
            },
            "logo": "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
        },
        "id": "3",
        "mainImage": "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
    }
    ],
    "saved": [{
        "price": "$526,500",
        "agency": {
            "brandingColors": {
                "primary": "#000000"
            },
            "logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
        },
        "id": "4",
        "mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
    }]
}]

const sideMenu = [
    {
        topLevel: [
            {
                title: 'Dashboard',
                link: 'dashboard',
                icon: 'home'
            },
            {
                title: 'Opportunities',
                link: 'opportunities',
                icon: 'assignment'
            },
        ]
    },
    {
        application: [
            {
                title: 'Overview',
                link: 'application.overview',
                icon: 'remove_red_eye'
            },
            {
                title: 'Quote',
                link: 'application.quote',
                icon: 'assignment_late',
            },
            {
                title: 'Fact Find',
                link: 'fact-find',
                icon: 'assignment_ind'
            },
            {
                title: 'Assessment',
                link: 'assessment',
                icon: 'lock'
            },
            {
                title: 'Credit Proposal',
                link: 'credit-proposal',
                icon: 'assignment'
            },
            {
                title: 'Lodgement',
                link: 'lodgement',
                icon: 'assignment_turned_in'
            },
            {
                title: 'Documents',
                link: 'documents',
                icon: 'insert_drive_file'
            },
            {
                title: 'Lender Center',
                icon: 'local_library',

            }
        ]
    },
    {
        middleLevel: [
            {
                title: 'Product Search',
                link: 'product-search',
                icon: 'local_offer'

            },
            {
                title: 'Tools & Calculators',
                id: 'tools_calculators',
                linkType: 'tools-calculators',
                calculatorType: 'main',
                customIcon: '<div class="calculator"><img src="https://s3-ap-southeast-2.amazonaws.com/chiefcdn/images/chieffe/icons/calculator.svg"/></div>',
                subMenu: [
                    {
                        title: 'Basic Loan Repayments',
                        id: 'tools_calc_basic_repayments',
                        linkType: 'tools-calculators',
                        calculatorType: 'basic-loan-repayments'
                    },
                    {
                        title: 'How Much Can I Borrow',
                        id: 'tools_calc_how_much-borrow',
                        linkType: 'tools-calculators',
                        calculatorType: 'how-much-can-i-borrow'
                    },
                    {
                        title: 'Stamp Duty Calculator',
                        id: 'tools_calc_how_much-borrow',
                        linkType: 'tools-calculators',
                        calculatorType: 'stamp-duty-calculator'
                    },
                    {
                        title: 'Comparison Rate',
                        id: 'tools_calc_comparision_rate',
                        linkType: 'tools-calculators',
                        calculatorType: 'comparison-rate'
                    },
                    {
                        title: 'Extra Repayments',
                        id: 'tools_calc_extra_repayments',
                        linkType: 'tools-calculators',
                        calculatorType: 'extra-repayments'
                    },
                    {
                        title: 'Complete Home Loan',
                        id: 'tools_calc_complete_home-loan',
                        linkType: 'tools-calculators',
                        calculatorType: 'complete-home-loan'
                    },
                    {
                        title: 'Mortgage Offset',
                        id: 'tools_calc_mortgage_offset',
                        linkType: 'tools-calculators',
                        calculatorType: 'mortgage-offset'
                    },
                    {
                        title: 'P & I vs Interest Only',
                        id: 'tools_calc_pi_interest_only',
                        linkType: 'tools-calculators',
                        calculatorType: 'interest-only'
                    },
                    {
                        title: 'Income Tax',
                        id: 'tools_calc_income_tax',
                        linkType: 'tools-calculators',
                        calculatorType: 'income-tax'
                    },
                    {
                        title: 'Budget',
                        id: 'tools_calc_budget',
                        linkType: 'tools-calculators',
                        calculatorType: 'budget'
                    }
                ]
            },
            {
                title: 'Marketing Tools',
                link: 'marketing-tools',
                icon: 'email'
            },
            {
                title: 'Base CRM',
                applicationFeature: 'base-crm-access',
                customIcon: '<div><img src="https://s3-ap-southeast-2.amazonaws.com/chiefcdn/images/chieffe/icons/basesvg.svg"/></div>'
            },
            {
                title: 'Commissions',
                link: 'commissions',
                icon: 'pie_chart'
            },
            {
                title: 'Document Library',
                link: 'document-library',
                icon: '<i class="material-icons">&#xE24D;</i>'
            },
            {
                title: 'Help',
                newWindow: true,
                icon: '<i class="material-icons">&#xE887;</i>'
            }
        ]
    }
];

