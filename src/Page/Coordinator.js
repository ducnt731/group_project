import React from "react";
import CoordinatorHome from "../components/Coordinator/CoordinatorHome";
import LayoutCoordinator from "../layouts/LayoutCoordinator";

export default function Coordinator() {
  return (
    <LayoutCoordinator>
      <div>
        <CoordinatorHome></CoordinatorHome>
      </div>
    </LayoutCoordinator>
  );
}
