// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!


const display_measurement_xr = [
    {
        name : "Label",
        field : "name",
        type : "text",
        validation : null,
        helpText : "",
        value: "20 x 30",
    },
    {
        name : "Width",
        field : "width",
        type : "text",
        validation : "required",
        helpText : "",
        value: "20",
    },
    {
        name : "Height",
        field : "height",
        type : "text",
        validation : "required",
        helpText : "",
        value: "30",
    },
    {
        name : "Notes",
        field : "note",
        type : "textarea",
        validation : null,
        helpText : "",
        value: "Suspendisse malesuada gravida elementum. Vivamus at nunc massa",
    },
    {
        name : "Label",
        field : "name",
        type : "text",
        validation : null,
        helpText : "",
        value: "30 x 40",
    },
    {
        name : "Width",
        field : "width",
        type : "text",
        validation : "required",
        helpText : "",
        value: "30",
    },
    {
        name : "Height",
        field : "height",
        type : "text",
        validation : "required",
        helpText : "",
        value: "40",
    },
    {
        name : "Notes",
        field : "note",
        type : "textarea",
        validation : null,
        helpText : "",
        value: "Massa malesuada gravida elementum. Vivamus at nunc massa",
    },
]

const display_location_xr = [
    {
        name : "Movement date",
        field : "movement_date",
        type : "date",
        validation : "required",
        helpText : "",
        value: "2018-09-13",
    },
    {
        name : "Notes",
        field : "note",
        type : "textarea",
        validation : null,
        helpText : "",
        value: "Vivamus malesuada gravida elementum. Vivamus at nunc massa",
    },
    {
        name : "Movement date",
        field : "movement_date",
        type : "date",
        validation : "required",
        helpText : "",
        value: "2018-09-13",
    },
    {
        name : "Notes",
        field : "note",
        type : "textarea",
        validation : null,
        helpText : "",
        value: "Massa malesuada gravida elementum. Vivamus at nunc massa",
    },
]

export const FormContext = {
    api: {
        form: {
            "id" : 1,
            "name" : "Objects",
            "table" : "object",
            "type" : "content",
            "fields" : [
                {
                    "name" : "Label",
                    "field" : "name",
                    "type" : "text",
                    "validation" : ["required"],
                    "helpText" : "Enter your label",
                },
                {
                    "name" : "Actor",
                    "field" : "actor_id",
                    "type" : "select",
                    "validation" : ["required"],
                    "helpText" : "",
                    "target" : {
                        "id" : 2,
                        "name" : "People & organisations",
                        "table" : "actor",
                        "type" : "content"
                    }
                },
                {
                    "name" : "Bodytext",
                    "field" : "bodytext",
                    "type" : "textarea",
                    "validation" : ["required"],
                    "helpText" : "This is my main field for data"
                },
                {
                    "name" : "Measurements",
                    "field" : "measurement_xr",
                    "type" : "oneToMany",
                    "validation" : null,
                    "helpText" : "",
                    "relationship" : {
                        "id" : 101,
                        "name" : "Work Measurements",
                        "table": "work_measurement_xrefs",
                        "type" : "relationship",
                        "relationshipName" : "work_measurement"
                    },
                    "source" : {
                        "id" : 1,
                        "name" : "Objects",
                        "table" : "object",
                        "type" : "content"
                    },
                    "fields" : [
                        {
                            "name" : "Label",
                            "field" : "name",
                            "type" : "calculated",
                            "validation" : null,
                            "helpText" : ""
                        },
                        {
                            "name" : "Width",
                            "field" : "width",
                            "type" : "text",
                            "validation" : ["required"],
                            "helpText" : ""
                        },
                        {
                            "name" : "Height",
                            "field" : "height",
                            "type" : "text",
                            "validation" : ["required"],
                            "helpText" : ""
                        },
                        {
                            "name" : "Notes",
                            "field" : "note",
                            "type" : "textarea",
                            "validation" : null,
                            "helpText" : ""
                        }
                    ]
                },
                {
                    "name" : "Location",
                    "field" : "location_xr",
                    "type" : "ManyToMany",
                    "validation" : null,
                    "helpText" : "",
                    "relationship" : {
                        "id" : 101,
                        "name" : "Work location",
                        "table": "work_location_xrefs",
                        "type" : "relationship",
                        "relationshipName" : "work_location"
                    },
                    "source" : {
                        "id" : 1,
                        "name" : "Objects",
                        "table" : "object",
                        "type" : "content"
                    },
                    "target" : {
                        "id" : 3,
                        "name" : "Locations",
                        "table" : "location",
                        "type" : "content"
                    },
                    "fields" : [
                        {
                            "name" : "Movement date",
                            "field" : "movement_date",
                            "type" : "date",
                            "validation" : ["required"],
                            "helpText" : ""
                        },
                        {
                            "name" : "Notes",
                            "field" : "note",
                            "type" : "textarea",
                            "validation" : null,
                            "helpText" : ""
                        }
                    ]
                }
            ]
        },
        select: {
            2: [
                {
                    "id" : 1,
                    "name" : "Jason Statham"
                },
                {
                    "id" : 2,
                    "name" : "John Travolta"
                },
                {
                    "id" : 3,
                    "name" : "Arnold Schwarzenegger"
                },
                {
                    "id" : 4,
                    "name" : "Sylvester Stallone"
                },
                {
                    "id" : 5,
                    "name" : "Ronnie Coleman"
                },
                {
                    "id" : 6,
                    "name" : "Mel Gibson"
                },
                {
                    "id" : 7,
                    "name" : "Chuck Norris"
                }
            ],
            3: [
                {
                    "id" : 1,
                    "name" : "Room 1"
                },
                {
                    "id" : 2,
                    "name" : "Room 2"
                },
                {
                    "id" : 3,
                    "name" : "Room 3"
                },
                {
                    "id" : 4,
                    "name" : "Room 4"
                },
                {
                    "id" : 5,
                    "name" : "Room 5"
                },
                {
                    "id" : 6,
                    "name" : "Room 6"
                },
                {
                    "id" : 7,
                    "name" : "Room 7"
                }
            ]
        },
        prefill: {
            "name" : "This is test record",
            "actor_id" : {
                "id" : 3,
                "name" : "Arnold Schwarzenegger"
            },
            "bodytext" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nibh in feugiat",
            "measurement_xr" : [
                {
                    "id" : 31,
                    "fields" : {
                        "name" : "20 x 30",
                        "width" : "20",
                        "height" : "30",
                        "note": "Suspendisse malesuada gravida elementum. Vivamus at nunc massa"
                    }
                },
                {
                    "id" : 37,
                    "fields" : {
                        "name" : "30 x 40",
                        "width" : "30",
                        "height" : "40",
                        "note": "Massa malesuada gravida elementum. Vivamus at nunc massa"
                    }
                }
            ],
            "location_xr" : [
                {
                    "id" : 31,
                    "target" : {
                        "id" : 3,
                        "name" : "Room 3"
                    },
                    "fields" : {
                        "movement_date" : "2018-09-13",
                        "note": "Vivamus malesuada gravida elementum. Vivamus at nunc massa"
                    }
                },
                {
                    "id" : 37,
                    "target" : {
                        "id" : 6,
                        "name" : "Room 6"
                    },
                    "fields" : {
                        "movement_date" : "2019-09-13",
                        "note": "Massa malesuada gravida elementum. Vivamus at nunc massa"
                    }
                }
            ]
        },
    },

    // OUTPUT FROM ADAPTER'S
    // adapter should call multiple API's and combine data into one object.
    // Keys should be same as in origin api's.
    // Partial structure should be similar to origin api's.
    display: [
        {
            name: "Label",
            field: "name",
            value: "This is test record",
            type: "text",
            required: "",
            helpText : "",
        },
        {
            name: "Actor",
            field: "actor_id",
            value: 3,
            type: "select",
            required: "",
            helpText : "",
            options: [
                {
                    id : 1,
                    name : "Jason Statham"
                },
                {
                    id : 2,
                    name : "John Travolta"
                },
                {
                    id : 3,
                    name : "Arnold Schwarzenegger"
                },
                {
                    id : 4,
                    name : "Sylvester Stallone"
                },
                {
                    id : 5,
                    name : "Ronnie Coleman"
                },
                {
                    id : 6,
                    name : "Mel Gibson"
                },
                {
                    id : 7,
                    name : "Chuck Norris"
                }
            ]
        },
        {
            name: "Body text",
            field : "bodytext",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum nibh in feugiat",
            type: "textarea",
            required: "",
            helpText : "",
        },
        {
            name: "Measure",
            field : "measurement_xr",
            type: "button",
            helpText : "",
            display: [ ...display_measurement_xr ],
        },
        {
            name: "Location",
            field : "location_xr",
            type: "button",
            helpText : "",
            display: [ ...display_location_xr ],
        },
    ],

}

