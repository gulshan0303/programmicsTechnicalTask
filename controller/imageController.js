const Image = require('../model/imageModel');

// Define the addImage controller
const addImage = async (req, res) => {
    const { userId, imageId } = req.body;
  
    try {
      // Find the image by ID
      const image = await Image.findById(imageId);
  
      if (!image) {
        // Return an error if the image doesn't exist
        return res.status(404).json({ error: 'Image not found' });
      }
  
      // Update the image's likes array with the user's ID
      if (!image.likes.includes(userId)) {
        image.likes.push(userId);
      }
  
      // Save the updated image to the database
      const updatedImage = await image.save();
  
      // Return the updated image as the response
      res.json(updatedImage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Export the addImage controller
  module.exports = { addImage };

