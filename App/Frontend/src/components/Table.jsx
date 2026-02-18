const Table = ({ users, onEdit, onDelete }) => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index+1}</td>
            <td>{user.Name}</td>
            <td>{user.Email}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>
            </td>
            <td>
              <button onClick={() => onDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
