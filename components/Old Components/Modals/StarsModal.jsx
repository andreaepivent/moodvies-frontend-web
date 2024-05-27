import React, { useState } from "react";

function StarsModal({ nom }) {
  return (
    <div>
      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" checked />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
  <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
</div>
    </div>
  );
}

export default StarsModal;
