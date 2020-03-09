const venues = {
    macaroni_grill: {
        name: "Macaroni Grill",
        address: "5100 E Broadway Blvd, Tucson, AZ"
    },
    hacienda_del_lago: {
        name: "Hacienda del Lago Golf Course",
        address: "14155 Via Rancho del Lago, Vail, AZ"
    },
    house_of_bards: {
        name: "House of Bards",
        address: "4915 E Speedway Blvd, Tucson, AZ"
    },
    crystal_palace: {
        name: "Crystal Palace Saloon",
        address: "436 E Allen St, Tombstone, AZ"
    },
    desert_trails: {
        name: "Desert Trails RV Park",
        address: "3551 S San Joaquin Rd, Tucson, AZ"
    },
    the_rock: {
        name: "The Rock",
        address: "136 N Park Ave, Tucson, AZ"
    },
    ventana_cascade_lounge: {
        name: "Loews Ventana Canyon, Cascade Lounge",
        address: "7000 N Resort Dr, Tucson, AZ"
    },
    casino_del_sol_tropico_lounge: {
        name: "Casino del Sol, Tropico Lounge",
        address: "5655 W Valencia Rd, Tucson, AZ"
    }
};

const events = [
    {
        date: "July 28, 2018",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.hacienda_del_lago,
        start: "2018-07-28T19:00:00-07:00",
        end: "2018-07-28T21:00:00-07:00"
    },
    {
        date: "September 15, 2018",
        time: "8:00 - 12:00",
        cost: "Free",
        venue: venues.crystal_palace,
        start: "2018-09-15T20:00:00-07:00",
        end: "2018-09-16T00:00:00-07:00"
    },
    {
        date: "October 6, 2018",
        time: "8:00 - 12:00",
        cost: "Free",
        venue: venues.crystal_palace,
        start: "2018-10-06T20:00:00-07:00",
        end: "2018-10-07T00:00:00-07:00"
    },
    {
        date: "October 12, 2018",
        time: "8:00 - 12:00",
        cost: "$5.00",
        venue: venues.house_of_bards,
        start: "2018-10-12T20:00:00-07:00",
        end: "2018-10-13T00:00:00-07:00"
    },
    {
        date: "November 10, 2018",
        time: "8:00 - 12:00",
        cost: "Free",
        venue: venues.crystal_palace,
        start: "2018-11-10T20:00:00-07:00",
        end: "2018-11-11T00:00:00-07:00"
    },
    {
        date: "December 22, 2018",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.desert_trails,
        start: "2018-12-22T19:00:00-07:00",
        end: "2018-12-22T21:00:00-07:00"
    },
    {
        date: "Jan 19, 2019",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.hacienda_del_lago,
        start: "2019-01-19T19:00:00-07:00",
        end: "2019-01-19T21:00:00-07:00"
    },
    {
        date: "Feb 16, 2019",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.hacienda_del_lago,
        start: "2019-02-16T19:00:00-07:00",
        end: "2019-02-16T21:00:00-07:00"
    },
    {
        date: "Jun 8, 2019",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.hacienda_del_lago,
        start: "2019-06-08T19:00:00-07:00",
        end: "2019-06-08T21:00:00-07:00"
    },
    {
        date: "Sep 21, 2019",
        time: "7:00 - 9:00",
        cost: "Free",
        venue: venues.hacienda_del_lago,
        start: "2019-09-21T19:00:00-07:00",
        end: "2019-09-21T21:00:00-07:00"
    },
    {
        date: "October 26, 2019",
        time: "8:00 - 12:00",
        cost: "$5.00",
        venue: venues.the_rock,
        start: "2019-10-26T20:00:00-07:00",
        end: "2019-10-27T00:00:00-07:00"
    },
    {
        date: "January 10, 2020",
        time: "9:00 - 1:00",
        cost: "Free",
        venue: venues.casino_del_sol_tropico_lounge,
        start: "2020-01-10T21:00:00-07:00",
        end: "2020-01-11T01:00:00-07:00"
    },
    {
        date: "March 7, 2020",
        time: "8:30 - 11:30",
        cost: "Free",
        venue: venues.ventana_cascade_lounge,
        start: "2020-03-07T20:30:00-07:00",
        end: "2020-03-07T23:30:00-0700"
    },
    {
        date: "March 27, 2020",
        time: "9:00 - 1:00",
        cost: "Free",
        venue: venues.casino_del_sol_tropico_lounge,
        start: "2020-03-27T21:00:00-07:00",
        end: "2020-03-28T01:00:00-07:00"
    },
    {
        date: "June 27, 2020",
        time: "8:30 - 11:30",
        cost: "Free",
        venue: venues.ventana_cascade_lounge,
        start: "2020-06-27T20:30:00-07:00",
        end: "2020-06-27T23:30:00-07:00"
    }
];


exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({"events":events}),
    };
    return response;
};
