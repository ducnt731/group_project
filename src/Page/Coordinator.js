import React from "react";
import LayoutMarketing from "../layouts/layoutMarketing";
import CoordinatorHome from "../components/Coordinator/CoordinatorHome";
import LayoutCoordinator from "../layouts/LayoutCoordinator";
import AdminHome from "../components/adminHome/adminHome";

export default function Coordinator() {
  return (
    <LayoutCoordinator>
      <div>
        <CoordinatorHome></CoordinatorHome>
      </div>
    </LayoutCoordinator>
  );
}
