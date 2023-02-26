export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Kullanıcı",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Yaş",
      width: 100,
    },
    {
      field: "status",
      headerName: "Durum",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status === "Aktif" ? "active" : params.row.status === "Pasif" ? "passive" : "pending"}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

export const userRows = [
    {
      id: 1,
      username: "Halil İbrahim",
      img: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "Aktif",
      email: "1ibrahim@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Furkan Kula",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "2kula@gmail.com",
      status: "Pasif",
      age: 42,
    },
    {
      id: 3,
      username: "Ömer Faruk",
      img: "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "3omer@gmail.com",
      status: "Askıda",
      age: 45,
    },
    {
      id: 4,
      username: "Ayşe Avcı",
      img: "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "4avci@gmail.com",
      status: "Aktif",
      age: 16,
    },
    {
      id: 5,
      username: "Nilüfer",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "5nilufer@gmail.com",
      status: "Pasif",
      age: 22,
    },
    {
      id: 6,
      username: "Ahmet Ali",
      img: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "6ali@gmail.com",
      status: "Aktif",
      age: 15,
    },
    {
      id: 7,
      username: "Tayfun Kaya",
      img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "7tayfun@gmail.com",
      status: "Pasif",
      age: 44,
    },
    {
      id: 8,
      username: "Fİliz Candaş",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "8candas@gmail.com",
      status: "Aktif",
      age: 36,
    },
    {
      id: 9,
      username: "Fatma Gül",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "fatmagul@gmail.com",
      status: "Askıda",
      age: 65,
    },
    {
      id: 10,
      username: "Yaşar Usta",
      img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "yasarusta@gmail.com",
      status: "Aktif",
      age: 65,
    },
  ];