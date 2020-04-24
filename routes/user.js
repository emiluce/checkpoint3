const express = require("express");


const router = express.Router();

// Import DB connection
const db = require("../config/db");

// @route   POST /playlist
// @desc    Create new playlist
router.post("/", (req, res) => {
  db.query("INSERT INTO playlist SET ?", req.body, (err, playlist) => {
    if (err) return res.status(400).send(err);
    res.send({
      id: playlist.insertId,
      ...req.body
    });
  });
});

// @route   GET /playlist/:id
// @desc    Get single playlist
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM playlist WHERE id = ?", req.params.id, (err, playlist) => {
    res.send(playlistss[0]);
  });
});


// @route   POST /users
// @desc    Create new track
router.post("/", (req, res) => {
  db.query("INSERT INTO track SET ?", req.body, (err, track) => {
    if (err) return res.status(400).send(err);
    res.send({
      id: track.insertId,
      ...req.body
    });
  });
});



// @route   GET /playlist/:id/track
// @desc    Get all tracks from single playlist
router.get("/:id/track", (req, res) => {
  db.query(
    "SELECT * FROM track WHERE playlist_id = ?",
    req.params.id,
    (err, track) => {
      res.send(track);
    }
  );
});


// @route   DELETE /playlist
// @desc    Delete single playlist
router.delete("/playlist/:id", (req, res) => {
  db.query("DELETE * FROM playlist WHERE id = ?", req.params.id, (err, playlist) => {
    if (err) return res.status(400).send(err);
    res.send({});
  });
});


// @route   PUT /playlist
// @desc    Update single playlist
router.put("/playlist/:id", (req, res) => {
  db.query("UPDATE * FROM playlist WHERE id = ?", [req.body, req.params.id], (err, playlist) => {
    if (err) return res.status(400).send(err);
    res.send(playlist);
  });
});


// @route   DELETE /playlist
// @desc    Delete a track from a single playlist
router.delete("/:id/playlist", (req, res) => {
  db.query("DELETE track_id FROM playlist WHERE playlist_id = ?", req.params.id, (err, playlist) => {
    if (err) return res.status(400).send(err);
    res.send({});
  });
});


// @route   PUT /playlist
// @desc    Update a track from a single playlist
router.put("/:id/playlist", (req, res) => {
  db.query("UPDATE * FROM playlist WHERE id = ?", [req.body, req.params.id], (err, playlist) => {
    if (err) return res.status(400).send(err);
    res.send(playlist);
  });
});



module.exports = router;
