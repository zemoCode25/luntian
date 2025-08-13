import React from "react";

export default function HeaderDialog({
  isHeaderDialogOpen,
}: {
  isHeaderDialogOpen: boolean;
}) {
  return <div>{isHeaderDialogOpen && <p>TANGINA MO HAHHAHA</p>}</div>;
}
