import axios from "axios"

/*let deleteData = async (name, id) => {
  try {
    alert(`you are trying to delete ${name} !`)

    let result = await axios({
      url: `http://localhost:8885/delete/${id}`,
      method: 'delete'
    })

    if (result.status == 200) {
      alert("data has been delete successfully !")
    }

    else {
      throw ("any message")
    }

  } catch (err) {
    alert("unable to delete the data !")
    console.log("unable to delete", err)
  }
}

export { deleteData }*/

let deleteData = async (name, id) => {
  try {
    // Confirmation pop-up
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);

    // If the user clicks "OK", proceed with deletion
    if (confirmed) {
      let result = await axios({
        url: `http://localhost:8885/delete/${id}`,
        method: 'delete'
      });

      if (result.status === 200) {
        alert("Data has been deleted successfully!");
      } else {
        throw new Error("Failed to delete data");
      }
    } else {
      alert("Deletion canceled");
    }
  } catch (err) {
    alert("Unable to delete the data!");
    console.log("Unable to delete", err);
  }
};

export { deleteData }



