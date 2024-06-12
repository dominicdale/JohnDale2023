import os
from PIL import Image


data = [
"Group: Black Boats",
"data-id: abstract",
"data-img: Abstract/Black Boats",
"data-title: Black Boats",
"data-description: Acrylic on cardboard",
"data-price: -1",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 20",
"data-height: 21",
"data-framed: Not Framed",
"Group: Black On White",
"data-id: abstract",
"data-img: Abstract/Black on White",
"data-title: Black On White",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 3536",
"data-imgheight: 2832",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Black Stripes",
"data-id: abstract",
"data-img: Abstract/Black Stripes",
"data-title: Black Stripes",
"data-description: Acrylic on canvas",
"data-price: 175",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 70",
"data-height: 50",
"data-framed: Not Framed",
"Group: Gray Square",
"data-id: abstract",
"data-img: Abstract/Gray Square",
"data-title: Gray Square",
"data-description: Paper collage",
"data-price: 0",
"data-imgwidth: 2704",
"data-imgheight: 2648",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Harmony In White",
"data-id: abstract",
"data-img: Abstract/Harmony in white",
"data-title: Harmony In White",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 2832",
"data-imgheight: 2840",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Mystic Sky",
"data-id: abstract",
"data-img: Abstract/Mystic Sky",
"data-title: Mystic Sky",
"data-description: Paper collage and paint",
"data-price: 0",
"data-imgwidth: 3600",
"data-imgheight: 3112",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Red L",
"data-id: abstract",
"data-img: Abstract/Red L",
"data-title: Red L",
"data-description: Paper collage",
"data-price: 0",
"data-imgwidth: 3160",
"data-imgheight: 2608",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Red Stripe",
"data-id: abstract",
"data-img: Abstract/Red Stripe",
"data-title: Red Stripe",
"data-description: Paper collage",
"data-price: 0",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Study In Gray",
"data-id: abstract",
"data-img: Abstract/Study in Gray",
"data-title: Study In Gray",
"data-description: Collage and paint",
"data-price: 0",
"data-imgwidth: 3208",
"data-imgheight: 2808",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: White Boats",
"data-id: abstract",
"data-img: Abstract/White Boats",
"data-title: White Boats",
"data-description: Acrylic on cardboard",
"data-price: 40",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 18",
"data-height: 21",
"data-framed: Not Framed",
"Group: White Field 2",
"data-id: abstract",
"data-img: Abstract/White Field (2)",
"data-title: White Field 2",
"data-description: Paper collage",
"data-price: 0",
"data-imgwidth: 2046",
"data-imgheight: 2118",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: White Field",
"data-id: abstract",
"data-img: Abstract/White Field",
"data-title: White Field",
"data-description: Paper collage",
"data-price: 0",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: White Post",
"data-id: abstract",
"data-img: Abstract/White Post",
"data-title: White Post",
"data-description: Paper collage and paint",
"data-price: 0",
"data-imgwidth: 3344",
"data-imgheight: 2928",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Yellow Corner",
"data-id: abstract",
"data-img: Abstract/Yellow Corner",
"data-title: Yellow Corner",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 3632",
"data-imgheight: 2880",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Yellow Streak",
"data-id: abstract",
"data-img: Abstract/Yellow Streak",
"data-title: Yellow Streak",
"data-description: Acrylic on canvas",
"data-price: 150",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 40",
"data-height: 51",
"data-framed: Not Framed",
"Group: One",
"data-id: collage",
"data-img: Collage/One",
"data-title: One",
"data-description: Paper collage",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Three",
"data-id: collage",
"data-img: Collage/Three",
"data-title: Three",
"data-description: Paper collage",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Two",
"data-id: collage",
"data-img: Collage/Two",
"data-title: Two",
"data-description: Paper collage",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clyde Valley",
"data-id: landscapes",
"data-img: Landscapes/Clyde Valley",
"data-title: Clyde Valley",
"data-description: Acrylic on canvas",
"data-price: 240",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 40",
"data-height: 50",
"data-framed: Not Framed",
"Group: Clyde Walkway 2",
"data-id: landscapes",
"data-img: Landscapes/Clyde Walkway 2",
"data-title: Clyde Walkway 2",
"data-description: Acrylic on canvas",
"data-price: 145",
"data-imgwidth: 2680",
"data-imgheight: 3336",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clyde Walkway",
"data-id: landscapes",
"data-img: Landscapes/Clyde Walkway",
"data-title: Clyde Walkway",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 2759",
"data-imgheight: 3484",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Falls Of Clyde 2",
"data-id: landscapes",
"data-img: Landscapes/Falls of Clyde 2",
"data-title: Falls Of Clyde 2",
"data-description: Acrylic on canvas",
"data-price: 280",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 40",
"data-height: 50",
"data-framed: Not Framed",
"Group: Falls Of Clyde Bonnington Linn",
"data-id: landscapes",
"data-img: Landscapes/Falls of Clyde Bonnington Linn",
"data-title: Falls Of Clyde Bonnington Linn",
"data-description: Acrylic on canvas",
"data-price: 290",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 40",
"data-height: 57",
"data-framed: Not Framed",
"Group: Falls Of Clyde",
"data-id: landscapes",
"data-img: Landscapes/Falls of Clyde",
"data-title: Falls Of Clyde",
"data-description: Acrylic on canvas",
"data-price: 380",
"data-imgwidth: 3097",
"data-imgheight: 4379",
"data-width: 50",
"data-height: 70",
"data-framed: Not Framed",
"Group: Findochty Harbour",
"data-id: landscapes",
"data-img: Landscapes/Findochty Harbour",
"data-title: Findochty Harbour",
"data-description: Acrylic on canvas",
"data-price: 170",
"data-imgwidth: 2835",
"data-imgheight: 4055",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Frosty Garden",
"data-id: landscapes",
"data-img: Landscapes/Frosty Garden",
"data-title: Frosty Garden",
"data-description: Acrylic on canvas",
"data-price: 360",
"data-imgwidth: 2895",
"data-imgheight: 3677",
"data-width: 57",
"data-height: 67",
"data-framed: Framed",
"Group: Frosty Morning Clyde Valley",
"data-id: landscapes",
"data-img: Landscapes/Frosty Morning Clyde Valley",
"data-title: Frosty Morning Clyde Valley",
"data-description: Acrylic on Canvas",
"data-price: 0",
"data-imgwidth: 3736",
"data-imgheight: 2780",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Frosty Morning Carnwath",
"data-id: landscapes",
"data-img: Landscapes/Frosy Morning Carnwath",
"data-title: Frosty Morning Carnwath",
"data-description: Acrylic on canvas",
"data-price: 280",
"data-imgwidth: 3546",
"data-imgheight: 2831",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Lilac Copse",
"data-id: landscapes",
"data-img: Landscapes/Lilac Copse",
"data-title: Lilac Copse",
"data-description: Acrylic on canvas",
"data-price: 120",
"data-imgwidth: 2424",
"data-imgheight: 3400",
"data-width: 23",
"data-height: 30",
"data-framed: Not Framed",
"Group: River Clyde 2",
"data-id: landscapes",
"data-img: Landscapes/River Clyde 2",
"data-title: River Clyde 2",
"data-description: Heavily textured acrylic paint on canvas",
"data-price: 145",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: River Clyde Winter",
"data-id: landscapes",
"data-img: Landscapes/River Clyde Winter",
"data-title: River Clyde Winter",
"data-description: Acrylic on Canvas",
"data-price: 350",
"data-imgwidth: 2970",
"data-imgheight: 3721",
"data-width: 0",
"data-height: 0",
"data-framed: Framed",
"Group: River Clyde",
"data-id: landscapes",
"data-img: Landscapes/River Clyde",
"data-title: River Clyde",
"data-description: Acrylic on board",
"data-price: 0",
"data-imgwidth: 2796",
"data-imgheight: 4111",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Snowscape",
"data-id: landscapes",
"data-img: Landscapes/Snowscape",
"data-title: Snowscape",
"data-description: Acrylic on canvas",
"data-price: 175",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Snowscape",
"data-title: Snowscape",
"data-description: Plaster, acrylic paint on MDF.",
"data-price: 130",
"data-imgwidth: 3264",
"data-imgheight: 4928",
"data-width: 25",
"data-height: 30",
"data-framed: Not Framed",
"Group: The Red Boat",
"data-id: landscapes",
"data-img: Landscapes/The Red Boat",
"data-title: The Red Boat",
"data-description: Acrylic on Board",
"data-price: 0",
"data-imgwidth: 3912",
"data-imgheight: 2906",
"data-width: 0",
"data-height: 0",

"Group: Winter River Clyde",
"data-id: landscapes",
"data-img: Landscapes/Winter River Clyde",
"data-title: Winter River Clyde",
"data-description: Watercolour on paper",
"data-price: 75",
"data-imgwidth: 2829",
"data-imgheight: 3878",
"data-width: 21",
"data-height: 30",
"data-framed: Not Framed",
"Group: By The Clyde",
"data-id: lockdown",
"data-img: Lockdown/By the Clyde",
"data-title: By The Clyde",
"data-description: Watercolour and pen and ink",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"data-id: oilPastels",
"data-img: Oil Pastels/By the Clyde",
"data-title: By The Clyde",
"data-description: Tree by the river Clyde, oil pastel on black sugar paper",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Dead Tree",
"data-id: lockdown",
"data-img: Lockdown/Dead tree",
"data-title: Dead Tree",
"data-description: Watercolour and pen and ink",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Imagined Landscape",
"data-id: lockdown",
"data-img: Lockdown/Imagined Landscape",
"data-title: Imagined Landscape",
"data-description: Imagined landscape based upon Tinto Hill. A slightly more expressive painting with lots of impostors paint",
"data-price: 300",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 30",
"data-height: 40",
"data-framed: Not Framed",
"Group: Towards The Clyde Valley",
"data-id: lockdown",
"data-img: Lockdown/Towards the Clyde Valley",
"data-title: Towards The Clyde Valley",
"data-description: Acrylic painted at scene,looking towards the Clyde Valley",
"data-price: 300",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 30",
"data-height: 40",
"data-framed: Not Framed",
"Group: Tree 1",
"data-id: lockdown",
"data-img: Lockdown/Tree 1",
"data-title: Tree 1",
"data-description: Watercolour and pen and ink",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Tree 2",
"data-id: lockdown",
"data-img: Lockdown/Tree 2",
"data-title: By the Clyde",
"data-description: Watercolour pen and ink",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Tree 3",
"data-id: lockdown",
"data-img: Lockdown/Tree 3",
"data-title: Over the bing",
"data-description: Watercolour pen and ink",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Tree 4",
"data-id: lockdown",
"data-img: Lockdown/Tree 4",
"data-title: Dead tree",
"data-description: Watercolour and pen and ink",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Tree",
"data-id: lockdown",
"data-img: Lockdown/Tree",
"data-title: Tree",
"data-description: Watercolour and ink",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"data-id: oilPastels",
"data-img: Lockdown/Tree",
"data-title: Tree",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Vista",
"data-id: lockdown",
"data-img: Lockdown/Vista",
"data-title: Vista",
"data-description: Watercolour painted en plien air",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Eyemouth",
"data-id: oilPastels",
"data-img: Oil Pastels/Clouds 2",
"data-title: Eyemouth 2",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clouds 3",
"data-id: oilPastels",
"data-img: Oil Pastels/Clouds 3",
"data-title: Eyemouth 3",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clouds 4",
"data-id: oilPastels",
"data-img: Oil Pastels/Clouds 4",
"data-title: Eyemouth 4",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clouds 5",
"data-id: oilPastels",
"data-img: Oil Pastels/Clouds 5",
"data-title: Coldingham",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Clouds",
"data-id: oilPastels",
"data-img: Oil Pastels/Clouds",
"data-title: Clouds",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Coldingham Bay",
"data-id: oilPastels",
"data-img: Oil Pastels/Coldingham bay",
"data-title: Coldingham Bay",
"data-description: Oil pastel on paper",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Self Portrait",
"data-id: oilPastels",
"data-img: Oil Pastels/Self portrait",
"data-title: Self Portrait",
"data-description: Oil pastel on black sugar paper",
"data-price: 0",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Skull 2",
"data-id: oilPastels",
"data-img: Oil Pastels/Skull 2",
"data-title: Skull 2",
"data-description: Oil pastel on black sugar paper",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Skull 3",
"data-id: oilPastels",
"data-img: Oil Pastels/Skull 3",
"data-title: Skull 3",
"data-description: Oil Pastel",
"data-price: 100",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Skull",
"data-id: oilPastels",
"data-img: Oil Pastels/Skull",
"data-title: Skull",
"data-description: Oil pastel on black sugar paper",
"data-price: 120",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Weird Tree",
"data-id: oilPastels",
"data-img: Oil Pastels/Weird tree",
"data-title: Weird Tree",
"data-description: Oil pastel on black sugar paper",
"data-price: 100",
"data-imgwidth: 1600",
"data-imgheight: 1200",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Ailsa Craig",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Ailsa Craig",
"data-title: Ailsa Craig",
"data-description: Plaster, acrylic paint on MDF",
"data-price: 130",
"data-imgwidth: 2688",
"data-imgheight: 3752",
"data-width: 22",
"data-height: 31",
"data-framed: Not Framed",
"Group: Body Of Water",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Body of water",
"data-title: Body Of Water",
"data-description: Plaster, acrylic paint on board",
"data-price: 100",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 17",
"data-height: 22",
"data-framed: Not Framed",
"Group: Landscape With Cloud",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Landscape with cloud",
"data-title: Landscape With Cloud",
"data-description: Plaster, acrylic paint on MDF.",
"data-price: 130",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 25",
"data-height: 30",
"data-framed: Not Framed",
"Group: Purple Sky",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Purple sky",
"data-title: Purple Sky",
"data-description: Plaster, acrylic paint on board",
"data-price: 120",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 20",
"data-height: 25",
"data-framed: Not Framed",
"Group: Red Landscape",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Red landscape",
"data-title: Red Landscape",
"data-description: Plaster, acrylic paint on MDF.",
"data-price: 130",
"data-imgwidth: 3264",
"data-imgheight: 4928",
"data-width: 25",
"data-height: 30",
"data-framed: Not Framed",
"Group: Trees In The Distance",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Trees in the distance",
"data-title: Trees In The Distance",
"data-description: Plaster, acrylic paint on MDF.",
"data-price: 140",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 30",
"data-height: 25",
"data-framed: Not Framed",
"Group: Trees On The Hill",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Trees on the hill",
"data-title: Trees On The Hill",
"data-description: Plaster with acrylic paint on MDF(medium density fibreboard)",
"data-price: 145",
"data-imgwidth: 2688",
"data-imgheight: 3376",
"data-width: 25",
"data-height: 31",
"data-framed: Not Framed",
"Group: Winter Landscape",
"data-id: plasterPaintings",
"data-img: Plaster Paintings/Winter landscape",
"data-title: Winter Landscape",
"data-description: Plaster, acrylic paint on board",
"data-price: 145",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 22",
"data-height: 25",
"data-framed: Not Framed",
"Group: Bird's Eye View",
"data-id: stAbbs",
"data-img: St. Abbs/Bird's eye view",
"data-title: Bird's Eye View",
"data-description: Watercolour on paper",
"data-price: 60",
"data-imgwidth: 4530",
"data-imgheight: 2794",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Blue Boat",
"data-id: stAbbs",
"data-img: St. Abbs/Blue Boat",
"data-title: Blue Boat",
"data-description: Watercolour and sharpies on paper",
"data-price: 75",
"data-imgwidth: 3723",
"data-imgheight: 2777",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Fishing Boat",
"data-id: stAbbs",
"data-img: St. Abbs/Fishing Boat",
"data-title: Fishing Boat",
"data-description: Watercolour on paper",
"data-price: 60",
"data-imgwidth: 2487",
"data-imgheight: 3584",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Fishing Boats",
"data-id: stAbbs",
"data-img: St. Abbs/Fishing Boats",
"data-title: Fishing Boats",
"data-description: Watercolour on paper",
"data-price: 95",
"data-imgwidth: 3007",
"data-imgheight: 3428",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Harbour, St. Abbs",
"data-id: stAbbs",
"data-img: St. Abbs/Harbour, St. Abbs",
"data-title: Harbour, St. Abbs",
"data-description: Watercolour on paper",
"data-price: 75",
"data-imgwidth: 3007",
"data-imgheight: 3428",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Harbour",
"data-id: stAbbs",
"data-img: St. Abbs/Harbour",
"data-title: Harbour",
"data-description: Pen and Ink drawing",
"data-price: 60",
"data-imgwidth: 4948",
"data-imgheight: 3280",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Red Fishing Boat",
"data-id: stAbbs",
"data-img: St. Abbs/Red fishing boat",
"data-title: Red Fishing Boat",
"data-description: Acrylic on canvas paper",
"data-price: 95",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Red Reflections",
"data-id: stAbbs",
"data-img: St. Abbs/Red Reflections",
"data-title: Red Reflections",
"data-description: Acrylic on canvas paper",
"data-price: 90",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Telephone Box",
"data-id: stAbbs",
"data-img: St. Abbs/Telephone Box",
"data-title: Telephone Box",
"data-description: Watercolour on paper",
"data-price: 65",
"data-imgwidth: 2875",
"data-imgheight: 3459",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: White Cottage",
"data-id: stAbbs",
"data-img: St. Abbs/White Cottage",
"data-title: White Cottage",
"data-description: Watercolour on paper",
"data-price: 55",
"data-imgwidth: 3825",
"data-imgheight: 2900",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Blue 2",
"data-id: stillLife",
"data-img: Still Life/Blue 2",
"data-title: Blue 2",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 1200",
"data-imgheight: 1600",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Blue Table",
"data-id: stillLife",
"data-img: Still Life/Blue table",
"data-title: Blue Table",
"data-description: Acrylic on canvas",
"data-price: 260",
"data-imgwidth: 2652",
"data-imgheight: 3264",
"data-width: 50",
"data-height: 60",
"data-framed: Not Framed",
"Group: Blue",
"data-id: stillLife",
"data-img: Still Life/Blue",
"data-title: Blue",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 2487",
"data-imgheight: 3427",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Dutch Still Life",
"data-id: stillLife",
"data-img: Still Life/Dutch Still Life",
"data-title: Dutch Still Life",
"data-description: Acrylic on canvas",
"data-price: 0",
"data-imgwidth: 2965",
"data-imgheight: 3951",
"data-width: 0",
"data-height: 0",
"data-framed: Framed",
"Group: Pink Still Life",
"data-id: stillLife",
"data-img: Still Life/Pink still life",
"data-title: Pink Still Life",
"data-description: Acrylic on canvas",
"data-price: 100",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Purple Table",
"data-id: stillLife",
"data-img: Still Life/Purple table",
"data-title: Purple Table",
"data-description: Acrylic on canvas",
"data-price: 275",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 50",
"data-height: 60",
"data-framed: Not Framed",
"Group: Red Table",
"data-id: stillLife",
"data-img: Still Life/Red table",
"data-title: Red Table",
"data-description: Acrylic on canvas",
"data-price: 100",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Squinty Vase Of Flowers",
"data-id: stillLife",
"data-img: Still Life/Squinty vase of flowers",
"data-title: Squinty Vase Of Flowers",
"data-description: Acrylic on canvas",
"data-price: 300",
"data-imgwidth: 2893",
"data-imgheight: 4138",
"data-width: 50",
"data-height: 70",
"data-framed: Not Framed",
"Group: Sunflower",
"data-id: stillLife",
"data-img: Still Life/Sunflower",
"data-title: Sunflower",
"data-description: Acrylic on canvas",
"data-price: 240",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 40",
"data-height: 50",
"data-framed: Not Framed",
"Group: Tulips",
"data-id: stillLife",
"data-img: Still Life/Tulips",
"data-title: Tulips",
"data-description: Acrylic on canvas",
"data-price: 300",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 50",
"data-height: 70",
"data-framed: Not Framed",
"Group: Vase Of Flowers",
"data-id: stillLife",
"data-img: Still Life/Vase of flowers",
"data-title: Vase Of Flowers",
"data-description: Acrylic on canvas",
"data-price: 275",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 50",
"data-height: 60",
"data-framed: Not Framed",
"Group: Blue Sky",
"data-id: venice",
"data-img: Venice/Blue sky",
"data-title: Blue Sky",
"data-description: Acrylic on paper",
"data-price: 85",
"data-imgwidth: 2469",
"data-imgheight: 2697",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Grand Canal",
"data-id: venice",
"data-img: Venice/Grand Canal",
"data-title: Grand Canal Venice",
"data-description: Watercolour on paper",
"data-price: 75",
"data-imgwidth: 4948",
"data-imgheight: 3280",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Padua",
"data-id: venice",
"data-img: Venice/Padua",
"data-title: Padua",
"data-description: Watercolour on paper",
"data-price: 65",
"data-imgwidth: 2421",
"data-imgheight: 3879",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Pink Building",
"data-id: venice",
"data-img: Venice/Pink Building",
"data-title: Pink Building",
"data-description: Acrlyic on paper",
"data-price: 75",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Pink Palace",
"data-id: venice",
"data-img: Venice/Pink Palace",
"data-title: Pink Palace",
"data-description: Acrylic on paper",
"data-price: 85",
"data-imgwidth: 2799",
"data-imgheight: 2276",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Red Pavement",
"data-id: venice",
"data-img: Venice/Red Pavement",
"data-title: Red Pavement",
"data-description: Acrylic on paper",
"data-price: 75",
"data-imgwidth: 2709",
"data-imgheight: 3907",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Squinty Building",
"data-id: venice",
"data-img: Venice/Squinty Building",
"data-title: Squinty Building",
"data-description: Acrylic on paper",
"data-price: 75",
"data-imgwidth: 2805",
"data-imgheight: 3728",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Street Light",
"data-id: venice",
"data-img: Venice/Street Light",
"data-title: Street Light",
"data-description: Watercolour on paper",
"data-price: 60",
"data-imgwidth: 2565",
"data-imgheight: 3689",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Street Scene",
"data-id: venice",
"data-img: Venice/Street Scene",
"data-title: Street Scene",
"data-description: Watercolour on paper",
"data-price: 55",
"data-imgwidth: 3352",
"data-imgheight: 2405",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Study",
"data-id: venice",
"data-img: Venice/Study",
"data-title: Study",
"data-description: Pen and wash on paper",
"data-price: 60",
"data-imgwidth: 2803",
"data-imgheight: 3858",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Venetian Building",
"data-id: venice",
"data-img: Venice/Venetian Building",
"data-title: Venetian Building",
"data-description: Watercolour painting",
"data-price: 60",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Venetian Buildings",
"data-id: venice",
"data-img: Venice/Venetian Buildings",
"data-title: Venetian Buildings",
"data-description: Watercolour on paper",
"data-price: 55",
"data-imgwidth: 3307",
"data-imgheight: 3067",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Venetian Street Scene",
"data-id: venice",
"data-img: Venice/Venetian Street Scene",
"data-title: Venetian Street Scene",
"data-description: Pen drawing",
"data-price: 75",
"data-imgwidth: 4416",
"data-imgheight: 2322",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: Venetian Theatre",
"data-id: venice",
"data-img: Venice/Venetian Theatre",
"data-title: Venetian Theatre",
"data-description: Watercolour on paper",
"data-price: 75",
"data-imgwidth: 4928",
"data-imgheight: 3264",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
"Group: View From Hotel",
"data-id: venice",
"data-img: Venice/View from Hotel",
"data-title: View From Hotel",
"data-description: Watercolour",
"data-price: 0",
"data-imgwidth: 2974",
"data-imgheight: 4033",
"data-width: 0",
"data-height: 0",
"data-framed: Not Framed",
]

def update_image_dimensions(data):
    updated_data = data[:]  # Copy original data to preserve it
    img_path = None
    for i, line in enumerate(updated_data):
        if line.startswith("data-img: "):
            img_path = line.split(": ")[1]
        elif line.startswith("data-imgwidth: ") and img_path:
            img_file = os.path.join("media", f"{img_path}.jpg")
            if os.path.isfile(img_file):
                try:
                    with Image.open(img_file) as img:
                        width, height = img.size
                        # Update the width and height values without altering other lines
                        updated_data[i] = f"data-imgwidth: {width}"
                        updated_data[i + 1] = f"data-imgheight: {height}"
                except (FileNotFoundError, OSError) as e:
                    print(f"Error processing image {img_file}: {e}")
            else:
                print(f"Image not found: {img_file}")
            img_path = None  # Reset img_path to None after processing dimensions
    return updated_data

output_file = "dimensions.txt"
updated_data = update_image_dimensions(data)

with open(output_file, 'w') as f:
    f.write("data = [\n")
    for line in updated_data:
        f.write(f"    \"{line}\",\n")
    f.write("]\n")

print(f"Updated data written to {output_file}")