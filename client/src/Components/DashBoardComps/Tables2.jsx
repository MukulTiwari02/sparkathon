import React from "react";

const TablesProducts = () => {
  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="border-2 border-[#223534] shadow-2xl text-[12px] rounded-lg sm:text-[18px] h-[400px] no-scl overflow-auto">
        <table className="w-full">
        <tr className="p-2 text-[#0CA3E7]">
    <th className="p-2 sticky top-0 bg-[#050618]">#</th>
    <th className="p-2 sticky top-0 bg-[#050618]">PRODUCT NAME</th>
    <th className="p-2 sticky top-0 bg-[#050618]">LOCATION</th>
    <th className="p-2 sticky top-0 bg-[#050618]">DEMAND</th>
</tr>

<tr className="">
    <td className="p-2 text-center">1</td>
    <td className="p-2 text-center">Samsung 55" 4K UHD TV</td>
    <td className="p-2 text-center">New York, NY</td>
    <td className="p-2 text-center">150</td>
</tr>

<tr className="">
    <td className="p-2 text-center">2</td>
    <td className="p-2 text-center">Lego Star Wars Millennium Falcon</td>
    <td className="p-2 text-center">Los Angeles, CA</td>
    <td className="p-2 text-center">200</td>
</tr>

<tr className="">
    <td className="p-2 text-center">3</td>
    <td className="p-2 text-center">Apple iPhone 14</td>
    <td className="p-2 text-center">Chicago, IL</td>
    <td className="p-2 text-center">120</td>
</tr>

<tr className="">
    <td className="p-2 text-center">4</td>
    <td className="p-2 text-center">Charmin Ultra Soft Toilet Paper</td>
    <td className="p-2 text-center">Houston, TX</td>
    <td className="p-2 text-center">300</td>
</tr>

<tr className="">
    <td className="p-2 text-center">5</td>
    <td className="p-2 text-center">Dyson V15 Vacuum Cleaner</td>
    <td className="p-2 text-center">Phoenix, AZ</td>
    <td className="p-2 text-center">90</td>
</tr>

<tr className="">
    <td className="p-2 text-center">6</td>
    <td className="p-2 text-center">Instant Pot Duo 7-in-1</td>
    <td className="p-2 text-center">Philadelphia, PA</td>
    <td className="p-2 text-center">130</td>
</tr>

<tr className="">
    <td className="p-2 text-center">7</td>
    <td className="p-2 text-center">Nike Air Max 270</td>
    <td className="p-2 text-center">San Antonio, TX</td>
    <td className="p-2 text-center">210</td>
</tr>

<tr className="">
    <td className="p-2 text-center">8</td>
    <td className="p-2 text-center">Sony PlayStation 5</td>
    <td className="p-2 text-center">San Diego, CA</td>
    <td className="p-2 text-center">80</td>
</tr>

<tr className="">
    <td className="p-2 text-center">9</td>
    <td className="p-2 text-center">Great Value Organic Whole Milk</td>
    <td className="p-2 text-center">Dallas, TX</td>
    <td className="p-2 text-center">250</td>
</tr>

<tr className="">
    <td className="p-2 text-center">10</td>
    <td className="p-2 text-center">Sony Xperia 1 IV</td>
    <td className="p-2 text-center">San Jose, CA</td>
    <td className="p-2 text-center">70</td>
</tr>


          
        </table>
      </div>
    </div>
  );
};

export default TablesProducts;
