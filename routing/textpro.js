const express = require("express");
const {
	getBuffer
} = require("../library/functions");
const { Textprome } = require("./../scrapping/textprome");
const {
	loghandler
} = require("../library/functions");

const textpro = new Textprome();
const apikeyAndLimit = require("../library/apikeyAndLimit");
router = express.Router();

router.get("/1" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/3d-glowing-metal-text-effect-828.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/2" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/3d-chrome-text-effect-827.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/3" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-829.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/4" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-830.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/5" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/online-3d-rusty-metal-text-effect-maker-831.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/6" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/hot-metal-text-effect-843.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/7" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/online-3d-rusty-metal-text-effect-maker-833.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/8" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/online-3d-rusty-metal-text-effect-maker-834.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/9" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/online-3d-rusty-metal-text-effect-maker-842.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/10" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/blue-jewelry-text-effect-844.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
 router.get("/11" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/cyan-jewelry-text-effect-845.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/12" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/cyan-jewelry-text-effect-838.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/13" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-847.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/14" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-848.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/15" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-849.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/16" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-850.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/17" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-851.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/18" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-852.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/19" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-853.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/20" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-854.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/21" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-855.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/22" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-856.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/23" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-857.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/24" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-858.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/25" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-859.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/26" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-860.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/27" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-861.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/28" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-862.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/29" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-863.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/30" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-864.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/31" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-866.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/32" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-867.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/33" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-868.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/34" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-869.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/35" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-871.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/36" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-872.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/37" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-873.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/38" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-874.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/39" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-876.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/40" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-878.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/41" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-879.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/42" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-880.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/43" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-881.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/44" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-882.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/45" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-883.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/46" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-884.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/47" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-887.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/48" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-888.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/49" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-889.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/50" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/create-online-elegant-3d-ruby-text-effect-890.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/51" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-891.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/52" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-892.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/53" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-893.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/54" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-894.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/55" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-895.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/56" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-896.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/57" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-897.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/58" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-898.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/59" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-899.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/60" , async (req, res) => {
	const text = req.query.text
	if (!text) return res.json(loghandler.nottext)
	textpro.text("https://textpro.me/black-metal-text-effect-901.html", [text,]).then(async result => {
		const response = await getBuffer(result)
		res.type("png")
		res.send(response)
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});


router.get("/01" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/online-3d-rusty-metal-text-effect-maker-877.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/02" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-935.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/03" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-936.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/04" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-937.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});

router.get("/05" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-938.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/06" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-943.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});
router.get("/07" , async (req, res) => {
	const { text, text2 } = req.query;
	if (!text2) return res.json(loghandler.nottext2);
	if (!text) return res.json(loghandler.nottext);
	textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-945.html", [text, text2,]).then(async result => {
		const response = await getBuffer(result);
		res.type("png");
		res.send(response);
	}).catch(err => {
		res.json(loghandler.error);
		console.log(err)
	})
});
router.get("/08" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-971.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});
router.get("/09" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-972.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});
router.get("/010" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-974.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});
router.get("/011" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-977.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});
router.get("/012" , async (req, res) => {
  const { text, text2 } = req.query;
  if (!text2) return res.json(loghandler.nottext2);
  if (!text) return res.json(loghandler.nottext);
  textpro.text("https://textpro.me/create-bling-diamond-3d-text-effect-982.html", [text, text2,]).then(async result => {
    const response = await getBuffer(result);
    res.type("png");
    res.send(response);
  }).catch(err => {
    res.json(loghandler.error);
    console.log(err)
  })
});


module.exports = router