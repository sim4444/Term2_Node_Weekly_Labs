const fs = require("fs").promises;
const path = require("path");

function likePost(blogName, postTitle, username) {
  // read content of file "database.txt"
  fs.readFile("database.txt", "utf8")
    .then((value) => {
      // check if username already exists in file "database.txt" usernames
      str_value = value.toString();
      arr_value = str_value.split("\n");
      arr_usernames = arr_value.map((element) => element.split(":")[0]);
      if (!arr_usernames.includes(username)) {
        console.log("User does not exist in the database");
      } else {
        // find post matching postTitle
        blog_path = path.join(__dirname, blogName);
        fs.access(blog_path)
          .then(() => {
            fs.readdir(__dirname, blogName)
              .then((arr_filenames) => {
                // to find that post, need to find the correct file name
                title_no_spaces = postTitle.replace(/ /g, "_");
                // get matching list of names
                matching_arr_filenames = arr_filenames.filter(
                  (filename) =>
                    filename.startsWith(title_no_spaces) &&
                    filename.endsWith(".txt")
                );
                matching_arr_filenames.forEach((element) => {
                  file_path = path.join(
                    __dirname,
                    blogName,
                    matching_arr_filenames[0]
                  );
                  fs.readFile(file_path, "utf8")
                    .then((content) => {
                      str_content = content.toString();
                      arr_content = str_content.split("\n");
                      likes_content = arr_content[0];
                      likedBy_content = arr_content[1];
                      post_content = arr_content[2];
                      arr_likes = likes_content.trim().split(":");
                      arr_likedBy = likedBy_content.trim().split(":");
                      // update likes counter on first line
                      updated_likes = parseInt(arr_likes[1].trim()) + 1;
                      // add username to likedBy line using comma after 'you'
                      added_username = `${arr_likedBy[1].trim()}, ${username}`;
                      // content on line 1 and line 2
                      desired_content = `likes:${updated_likes}\nlikedBy:${added_username}\n${post_content}`;
                      // write updated content
                      fs.writeFile(file_path, desired_content, "utf8")
                        .then(() => {
                          console.log(
                            `Post "${postTitle}" liked by "${username}"`
                          );
                        })
                        .catch((err) => {
                          console.log(
                            `Error writing to post file:", ${err.message}`
                          );
                        });
                    })
                    .catch((err) =>
                      console.log(
                        `Error in reading the textfile: ${err.message}`
                      )
                    );
                });
              })
              .catch((err) => {
                console.log(`Path not found ${err.message}`);
              });
          })
          .catch((err) => {
            console.log(`File not found ${err.message}`);
          });
      }
    })
    .catch((err) =>
      console.log(`Error in reading the database: ${err.message}`)
    );
}
likePost("CBlog", "The Universe", "A");
