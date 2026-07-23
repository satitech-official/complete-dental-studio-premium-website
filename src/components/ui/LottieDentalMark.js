"use client";

import Lottie from "lottie-react";

const dentalMark = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 72,
  w: 120,
  h: 120,
  nm: "Dental studio pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "pulse ring",
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [82, 82, 100] }, { t: 36, s: [106, 106, 100] }, { t: 72, s: [82, 82, 100] }] }
      },
      ao: 0,
      shapes: [
        { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [76, 76] }, nm: "ellipse" },
        { ty: "st", c: { a: 0, k: [0.086, 0.49, 0.51, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 4 }, lc: 2, lj: 2, ml: 4 },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
      ],
      ip: 0,
      op: 72,
      st: 0,
      bm: 0
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "tooth mark",
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      ao: 0,
      shapes: [
        {
          ty: "sh",
          ks: {
            a: 0,
            k: {
              i: [[-9, -9], [-18, 0], [-5, 19], [0, 0], [5, 19], [18, 0], [9, -9], [0, -16]],
              o: [[9, -9], [18, 0], [5, 19], [0, 0], [-5, 19], [-18, 0], [-9, -9], [0, -16]],
              v: [[0, -30], [31, -20], [26, 19], [9, 35], [0, 16], [-9, 35], [-26, 19], [-31, -20]],
              c: true
            }
          },
          nm: "tooth shape"
        },
        { ty: "fl", c: { a: 0, k: [1, 1, 1, 1] }, o: { a: 0, k: 100 } },
        { ty: "st", c: { a: 0, k: [0.086, 0.49, 0.51, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 }, lc: 2, lj: 2, ml: 4 },
        { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
      ],
      ip: 0,
      op: 72,
      st: 0,
      bm: 0
    }
  ]
};

export function LottieDentalMark() {
  return (
    <Lottie
      animationData={dentalMark}
      loop
      className="h-24 w-24"
      aria-label="Animated dental clinic mark"
    />
  );
}
