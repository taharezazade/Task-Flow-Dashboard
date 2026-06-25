import WorkspaceHeader from "./components/WorkspaceHeader";

function WorkspacesPage({ workspace }) {
  return (
    <div>
      <WorkspaceHeader
        workspace={workspace}
        onInvite={() => console.log("invite")}
        onEdit={() => console.log("edit")}
        onDelete={() => console.log("delete")}
      />
    </div>
  );
}

export default WorkspacesPage;
