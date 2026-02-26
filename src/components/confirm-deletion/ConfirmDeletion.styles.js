import { justifyContent } from "@mui/system";

// Confirm Deletion Overlay and Box
export const confirmDeletionModalOverlaySx = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "fixed",
    inset: 0,
    zIndex: 1300,

    backgroundColor: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(2px)",
};
export const confirmDeletionBoxSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#303030",
    color: "#eaeaea",
    borderRadius: "20px",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.6)",

    p: 4,
    gap: 2,

    width: "95%",
    maxWidth: "520px",
};

// Buttons Layout
export const confirmDeletionButtonsLayoutSx = {
    display: "flex",
    justifyContent: "center",
    gap: 3,
};

// Buttons Confirm and Cancel
export const confirmButtonDeletionSx = {
    "&:hover": {
        backgroundColor: "#b71c1c",
    },
};
export const cancelButtonDeletionSx = {
    color: "#bbb",
    borderColor: "#444",

    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
};