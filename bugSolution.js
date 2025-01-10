// Solution: Handle potential null uri
async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.cancelled) {
    console.log('Cancelled');
  } else if (result.uri == null) {
    console.log('Image URI is null. Handle this gracefully.');
    // Take appropriate action, such as displaying an error message or using a default image.
    // For example:
    // alert('An error occurred while picking an image.');
  } else {
    console.log(result.uri);
    // Use result.uri as needed
  }
}

// ... rest of your code