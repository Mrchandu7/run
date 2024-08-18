const {
	Router
} = require("express");
const {
	regexUrl,
	getBuffer,
	resError,
	loghandler
} = require("../library/functions");
const { Ephoto } = require("./../scrapping/ephoto");
const ephoto = new Ephoto();
const apikeyAndLimit = require("../library/apikeyAndLimit");
router = Router();
const creator = "CHAND";



router.get("/01" , async (req, res) => {
  const { url, text, text2 } = req.query;
  if (!url) return res.json(loghandler.noturl)
  if (!text) return res.json(loghandler.nottext)
  if (!text2) return res.json(loghandler.nottext2)
  if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
  await ephoto.image(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-66.html", url, [text, text2]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(() => res.json(loghandler.error));
});
router.get("/02" , async (req, res) => {
  const { url, text, text2 } = req.query;
  if (!url) return res.json(loghandler.noturl);
  if (!text) return res.json(loghandler.nottext);
  if (!text2) return res.json(loghandler.nottext2);
  if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
  await ephoto.image(res, "https://en.ephoto360.com/create-a-wanted-poster-for-one-piece-live-action-724.html", url, [text, text2]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(() => res.json(loghandler.error));
});






router.get("/1", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-17.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/2", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-18.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/3", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-58.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/4", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-59.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/5", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-71.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/6", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-61.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/7", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-62.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/8", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-63.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/9", async (req, res) => {
	text = req.query.text;
	if (!text) return resError(res, "masukkan parameter text");
	await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-64.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/10", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-70.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/11", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-68.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/12", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-69.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/13", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-72.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/14", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-73.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/15", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-74.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/16", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-75.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/17", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-76.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/18", async (req, res) => {
  text = req.query.text;
  if (!text) return resError(res, "masukkan parameter text");
  await ephoto.text(res, "https://en.ephoto360.com/create-cute-astronaut-avatars-online-77.html", [text]).then(async result => {
    await getBuffer(result).then(buff => {
      res.type("png").send(buff);
    }).catch(() => res.json(loghandler.error));
  }).catch(er => {
    res.json(loghandler.error);
    console.log(er);
  });
})
router.get("/19", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-81.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/20", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-79.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/21", async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dragon-fire-text-effect-80.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/22" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-effects-incandescent-bulbs-83.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/23" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/dark-green-typography-online-84.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/24" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-the-leaves-85.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/25" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-86.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/26" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-88.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/27" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-90.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/28" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-91.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/29" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/text-on-cloth-effect-92.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/30" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/stars-night-online-93.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/31" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/cloud-text-effect-94.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/32" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/caper-cut-effect-95.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/33" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/writing-horror-text-online-96.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/34" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/sunlight-shadow-text-97.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/35" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/birthday-cake-96.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/36" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/lovely-cute-3d-text-effect-with-pig-97.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/37" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/halloween-fire-text-online-98.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/38" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/typography-online-leaf-autumn-99.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/39" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-text-by-name-effect-100.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})



router.get("/heated" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/heated-steel-lettering-effect-65.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/buoys" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/write-letters-on-life-buoys-484.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/quotestatus" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text || !text2) return resError(res, "masukkan parameter text & text2");
	await ephoto.text(res, "https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/neonblue" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/foggy" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/foggy-rainy-text-effect-75.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})
router.get("/crank" , async (req, res) => {
	text = req.query.text;
	if (!text) return res.json(loghandler.nottext)
	await ephoto.text(res, "https://en.ephoto360.com/animate-general-exam-crank-149.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("gif").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(er => {
		res.json(loghandler.error);
		console.log(er);
	});
})












router.get("/vhs" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/vhs-glitch-photo-effect-online-editing-510.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/memories" , async (req, res) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/pencil-photo-travel-memories-367.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/notebook" , async (req, res) => {
	const { url, text, text2 } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!text2) return res.json(loghandler.nottext2)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/make-notebook-music-effect-346.html", url, [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/glazing" , async (req, res) => {
	const { url, text } = req.query;
	if (!url) return res.json(loghandler.noturl)
	if (!text) return res.json(loghandler.nottext)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-a-rain-glazing-frame-effect-284.html", url, [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/flower" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fall-flower-photo-effects-130.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/heart" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-heart-123.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/smoke" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/smoke-photo-effects-119.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/handlefire" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/fire-photo-handle-effect-396.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/spectrum" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/spectrum-audio-photo-frame-online-570.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
})
router.get("/hp" , async (req, res) => {
	url = req.query.url;
	if (!url) return res.json(loghandler.noturl);
	if (!regexUrl(url)) return res.json(loghandler.urlInvalid);
	await ephoto.image(res, "https://en.ephoto360.com/create-painting-effect-on-stone-background-online-722.html", url).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/tiger" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.text(res, "https://en.ephoto360.com/create-digital-tiger-logo-video-effect-723.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("mp4").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/pencil" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text) return res.json(loghandler.nottext);
	if (!text2) return res.json(loghandler.nottext2);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-pencil-sketch-logo-online-719.html", [text, text2]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/arrow" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/anonymous" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/aov" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-beautiful-shimmering-aov-wallpapers-full-hd-for-mobile-643.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/warface" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/create-a-cover-of-warface-online-243.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});
router.get("/ml" , async (req, res) => {
	const text = req.query.text;
	if (!text) return res.json(loghandler.nottext);
	await ephoto.radio_text(res, "https://en.ephoto360.com/make-mobile-legends-wallpaper-full-hd-for-mobile-454.html", [text]).then(async result => {
		await getBuffer(result).then(buff => {
			res.type("png").send(buff);
		}).catch(() => res.json(loghandler.error));
	}).catch(() => res.json(loghandler.error));
});

module.exports = router;