import React from "react";
import PointsList from "./PointsList";

function UpdatesList() {
  const updates = {
    project_updates: [
      {
        project_update_id: 12,
        description: "test update",
        project_id: 10,
        points: [
          {
            point_id: 24,
            description: "test point",
            project_update_id: 12,
          },
        ],
      },
      {
        project_update_id: 13,
        description: "test update 2",
        project_id: 10,
        points: [
          {
            point_id: 25,
            description: "test point 2",
            project_update_id: 13,
          },
          {
            point_id: 26,
            description: "test point 3",
            project_update_id: 13,
          },
        ],
      },
    ],
  };

  const listItems = updates.project_updates.map((update) => (
    <li className="update" key={update.project_update_id}>
      <div className="updateDescription">{update.description}</div>
      <PointsList points={update.points} />
    </li>
  ));

  return (
    <div className="updatesListContainer">
      <ul>{listItems}</ul>
    </div>
  );
}

export default UpdatesList;

/*

"project_updates": [
      {
        "project_update_id": 12,
        "description": "test update",
        "project_id": 10,
        "points": [
          {
            "point_id": 24,
            "description": "test point",
            "project_update_id": 12
          }
        ]
      },
      {
        "project_update_id": 13,
        "description": "test update 2",
        "project_id": 10,
        "points": [
          {
            "point_id": 25,
            "description": "test point 2",
            "project_update_id": 13
          }
        ]
      }
    ]
  }
]

*/
