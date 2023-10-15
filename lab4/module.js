const fs = require("fs").promises;
const path = require("path");

const DATABASE_TEXTFILE = "database.txt";

//function to register a user
function register(username, password) {
  // read content of file "database.txt"
  fs.readFile(DATABASE_TEXTFILE, "utf8")
    .then((value) => {
      // check if username already exists in file "database.txt"
      const str_value = value.toString();
      const arr_value = str_value.split("\n");
      const arr_usernames = arr_value.map((element) => element.split(":")[0]);
      if (arr_usernames.includes(username)) {
        console.log(`User "${username}" already exists in the database`);
      } else {
        fs.appendFile(DATABASE_TEXTFILE, `${username}:${password}\n`, "utf8")
          .then(() => {
            console.log(
              `The username "${username}" and its password have been saved successfully!`
            );
          })
          .catch((err) => {
            console.log(
              `Error saving username "${username}" and its password: ${err.message}`
            );
          });
      }
    })
    .catch((err) => console.log(`Error in reading database: ${err.message}`));
}
// checking if register function works and commenting out
// register("C", "1234")
// register("M", "1234")
// register("D", "12344567")
// register("A", "ascbnvj")

//function to create a blog in provided folder(or directory)
function createABlog(blogName) {
  // check if the folder with blogName exists or not using fs.access
  const directory_path = path.join(__dirname, blogName);
  fs.access(directory_path)
    .then(() => {
      // blog folder exists
      console.log(
        `The blog with name "${blogName}" already exists. Please choose a blog with another name.`
      );
    })
    .catch(() => {
      // blog folder does not exist so creating a new folder(or directory) using fs.mkdir
      fs.mkdir(directory_path, { recursive: true })
        .then(() => {
          console.log(
            `The directory "${blogName}" has been created successfully!`
          );
        })
        .catch((err) => {
          console.log(`Error creating directory "${blogName}": ${err}`);
        });
    });
}
// checking if createABlog function works and commenting out
// createABlog("DBlog")
// createABlog("MBlog")
// createABlog("BBlog")
// createABlog("CBlog")

// function to create a Post in a given blogName(means folder)
function createPost(postTitle, postContent, blogName) {
  // check if folder exists or not using fs.access
  const folder_path = path.join(__dirname, blogName);
  fs.access(folder_path)
    // if folder exists, place textfile in folder that matches blogName
    .then(() => {
      // remove all spaces from title and replace with underscore
      const title_no_spaces = postTitle.replace(/ /g, "_");
      // adding unique feature to textfile name to avoid it from being overwritten if same title is used again
      const unique_name = `${title_no_spaces}_${Date.now()}`;
      // give name to textfile using unique_name and adding extension
      const file_name = `${unique_name}.txt`;
      const file_path = path.join(__dirname, blogName, file_name);
      const content = `likes:1\nlikedBy: you\n${postContent}`;
      fs.writeFile(file_path, content, "utf8")
        .then(() => {
          console.log(`The file "${file_name}" has been created successfully!`);
        })
        .catch((err) => {
          console.log(`Error creating file "${file_name}": ${err.message}`);
        });
    })
    // if folder does not exist, show an error message to user
    .catch(() => {
      console.log(`The folder with this name "${blogName}" does not exist.`);
    });
}
//checking fucntion and commenting out
// createPost("A Fruit", "rdtfyhgbjk", "MBlog")
// createPost("The Earth", "rdtfyhgbjk", "BBlog")

// creating function likePost for likes increment by specific users on specific posts in specific blogs
function likePost(blogName, postTitle, username) {
  // read content of file "database.txt"
  fs.readFile(DATABASE_TEXTFILE, "utf8")
    .then((value) => {
      // check if username already exists in file "database.txt"
      const arr_usernames = value
        .toString()
        .split("\n")
        .map((item) => item.split(":")[0]);
      if (!arr_usernames.includes(username)) {
        console.log(`User "${username}" does not exist in the database.`);
      }
      // else (if username exists), then find post matching postTitle
      const blog_path = path.join(__dirname, blogName);
      fs.access(blog_path)
        .then(() => {
          fs.readdir(blog_path)
            .then((arr_filenames) => {
              // to find that post, need to find the correct file name
              const no_space_title = postTitle.replace(/ /g, "_");
              const matching_filename = arr_filenames.find((filename) => {
                return (
                  filename.startsWith(no_space_title) &&
                  filename.endsWith(".txt")
                );
              });
              if (!matching_filename) {
                console.error(
                  `Post file with title "${postTitle}" not found in blog directory: "${blogName}".`
                );
              }
              // if matching filename is found, path is created to read content of that file
              const file_path = path.join(blog_path, matching_filename);
              fs.readFile(file_path, "utf8")
                .then((content) => {
                  const arr_lines = content.toString().split("\n");
                  const arr_likes = arr_lines[0].split(":");
                  const arr_likedBy = arr_lines[1].split(":");
                  // update likes counter on first line
                  const updated_likes = parseInt(arr_likes[1].trim()) + 1;
                  // add username to likedBy line using comma after 'you'
                  const updated_likedBy = `${arr_likedBy[1].trim()}, ${username}`;
                  arr_lines[0] = `likes:${updated_likes}`;
                  arr_lines[1] = `likedBy:${updated_likedBy}`;
                  const updated_content = arr_lines.join("\n");
                  fs.writeFile(file_path, updated_content, "utf8")
                    .then(() => {
                      console.log(
                        `Post with title "${postTitle}" liked by user "${username}".`
                      );
                    })
                    .catch((err) => {
                      console.error(`Error writing to file: ${err.message}`);
                    });
                })
                .catch((err) => {
                  console.error(`Error reading file: ${err.message}`);
                });
            })
            .catch((err) => {
              console.error(`Error finding path: ${err.message}`);
            });
        })
        .catch(() => {
          console.error(`Blog with name "${blogName}" does not exist.`);
        });
    })
    .catch((err) => {
      console.error(`Error reading database file: ${err.message}`);
    });
}

// checking likePost function and commenting out
// likePost("CBlog", "The Universe", "M");
// likePost("MBlog", "A Fruit", "M");
// likePost("ABlog", "The Universe", "A");
// likePost("BBlog", "The Earth", "B");
// likePost("DBlog", "The Earth", "B");

module.exports = { register, createABlog, createPost, likePost };
