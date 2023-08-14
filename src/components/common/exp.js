import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { Box, Link } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import Typography from "@material-ui/core/Typography";

import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./Dropdown";

function App() {
  return (
    <div>
      <Box>
        <Dropdown
          trigger={<Button>File</Button>}
          menu={[
            <DropdownNestedMenuItem
              label="New"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Document
                </DropdownMenuItem>,
                <DropdownMenuItem>
                  <Button
                    component="label"
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: "1rem"
                    }}
                    variant="text"
                  >
                    From Markdown file
                    <input
                      id="mdInput"
                      type="file"
                      accept={`.md`}
                      hidden
                      onChange={(e) => {}}
                    />
                  </Button>
                </DropdownMenuItem>,
                <DropdownMenuItem>
                  <Button
                    component="label"
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: "1rem"
                    }}
                    variant="text"
                  >
                    From HTML file
                    <input
                      id="mdInput"
                      type="file"
                      accept={`.html`}
                      hidden
                      onChange={(e) => {}}
                    />
                  </Button>
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="Save as"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Markdown
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Plain HTML
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Styled HTML
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="Export"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  PDF
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Github Gist
                </DropdownMenuItem>
              ]}
            />
          ]}
        />
        <Dropdown
          trigger={<Button>View</Button>}
          menu={[
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"Show preview"}
            </DropdownMenuItem>,
            <DropdownMenuItem
              onClick={() => {
                console.log("clicked");
              }}
            >
              {"Show status bar"}
            </DropdownMenuItem>
          ]}
        />
        <Dropdown
          trigger={<Button>Insert</Button>}
          menu={[
            <DropdownNestedMenuItem
              label="Image"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem>
                  <Button
                    variant="text"
                    component="label"
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: "1rem"
                    }}
                  >
                    Upload from Computer
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/png, image/jpeg"
                      hidden
                      onChange={() => {}}
                    />
                  </Button>
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  From URL
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="CSV"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownNestedMenuItem
                  label="As Table"
                  rightIcon={<ArrowRight />}
                  menu={[
                    <DropdownMenuItem>
                      <Button
                        variant="text"
                        component="label"
                        sx={{
                          color: "#000",
                          textTransform: "none",
                          fontSize: "1rem"
                        }}
                      >
                        Upload from Computer
                        <input
                          id="csvInput"
                          type="file"
                          accept={`.csv`}
                          hidden
                          onChange={(e) => {}}
                        />
                      </Button>
                    </DropdownMenuItem>,
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      From URL
                    </DropdownMenuItem>
                  ]}
                />
              ]}
            />
          ]}
        />
        <Dropdown
          trigger={<Button>Tools</Button>}
          menu={[
            <DropdownNestedMenuItem
              label="Headings"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Convert to Titlecase
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Generate Table of Contents
                </DropdownMenuItem>
              ]}
            />,
            <DropdownNestedMenuItem
              label="Code snippets"
              rightIcon={<ArrowRight />}
              menu={[
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Guess languages
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => {}}>
                  Prettify
                </DropdownMenuItem>,
                <DropdownMenuItem
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  Convert to Github Gists
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => {}}>
                  Screenshots
                </DropdownMenuItem>
              ]}
            />
          ]}
        />
        <Dropdown
          trigger={<Button>More</Button>}
          menu={[
            <DropdownMenuItem onClick={() => {}}>Settings</DropdownMenuItem>,
            <DropdownMenuItem onClick={() => {}}>
              <Link
                underline="none"
                href="https://www.markdownguide.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography
                  style={{
                    color: "black"
                  }}
                >
                  Markdown Guide
                </Typography>
              </Link>
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={() => {}}>
              <Link
                underline="none"
                href="https://forms.gle/6Mj24hef9mMAHfHN7"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography
                  style={{
                    color: "black"
                  }}
                >
                  Send Feedback
                </Typography>
              </Link>
            </DropdownMenuItem>
          ]}
        />
      </Box>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
