"use client";
import { Link } from "@nextui-org/link";
import { Card } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

import Carousel from "@/components/carouselimage";

const rows = [
  {
    key: "1",
    name: "Moist",
    status: "3,3%",
  },
  {
    key: "2",
    name: "Fixed Carbon",
    status: "14,6 %",
  },
  {
    key: "3",
    name: "Calorific",
    status: "4527/Kcal",
  },
  {
    key: "4",
    name: "Volatile Matter",
    status: "81%",
  },
  {
    key: "5",
    name: "Ash",
    status: "1,1%",
  },
];

const columns = [
  {
    key: "name",
    label: "Specification",
  },

  {
    key: "status",
    label: "Value",
  },
];

export default function Home() {
  return (
    <>
      <section id="hero">
        <div className="container-fluid h-full w-full">
          <Carousel />
        </div>
      </section>
      <section
        className="pt-20 xs:pt-10 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36"
        id="AboutUs"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                alt="about us"
                className="w-full h-[500px]  mt-4  md:ml-[150px] "
                src="assets/images/aboutus.png"
              />
            </div>
            <div
              className="w-full md:w-1/2 md:ml-8 md:mb-20 flex flex-col justify-center"
              style={{ fontFamily: "Nunito Sans" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5E8C52] mb-4 text-center">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-justify mb-4">
                PT Yohana Sentosa Pratama adalah perusahaan ekspor yang fokus
                pada Wood Chips & Wood Pellet berkualitas tinggi. Sejak 2024,
                kami bekerjasama dengan umkm lokal, menyediakan bahan baku kayu
                yang berkelanjutan dan sesuai dengan standar internasional.
                Dengan komitmen pada kualitas dan kelestarian lingkungan, kami
                siap memenuhi kebutuhan industri di seluruh dunia.
              </p>
              <p className="text-base md:text-lg text-justify">
                PT Yohana Sentosa Pratama is an export company specializing in
                high-quality Wood Chips and Wood Pellets. Since 2024, we have
                been collaborating with local SMEs to provide sustainable wood
                raw materials that comply with international standards. Our
                dedication to quality and environmental sustainability is at the
                core of our operations, ensuring that we meet the diverse needs
                of industries around the world.
              </p>
              <div className="mt-6">
                <Link
                  className="inline-block px-6 py-3 bg-[#5E8C52] text-white font-semibold text-base rounded-lg shadow-md hover:bg-[#4a6f3a] transition-colors duration-300"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="product">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-[#5E8C52] mt-16">
            BEST PRODUCT FOR YOU
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-8">
            <Card isHoverable isPressable>
              <img
                alt="product"
                className="w-full h-[600px] object-cover rounded-lg"
                src="assets/images/wp3.jpg"
              />
              <div className="container">
                <div className="p-4">
                  <h3 className="text-xl text-center font-semibold mt-4">
                    Wood Pellets
                  </h3>
                  <h3 className="text-base mt-2">
                    Our wood pellets offer a versatile and eco-friendly solution
                    for various energy and raw material needs. Designed for
                    superior performance, these high-quality pellets are perfect
                    for both industrial and domestic applications.
                  </h3>
                  <Table aria-label="Example table with dynamic content">
                    <TableHeader columns={columns}>
                      {(column) => (
                        <TableColumn key={column.key}>
                          {column.label}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody items={rows}>
                      {(item) => (
                        <TableRow key={item.key}>
                          {(columnKey) => (
                            <TableCell>
                              {getKeyValue(item, columnKey)}
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
            <Card isHoverable isPressable>
              <img
                alt="product"
                className="w-full h-[600px] object-fill rounded-lg"
                src="assets/images/comingsoon.png"
              />
              <div className="container">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mt-4 text-center">
                    COMING SOON
                  </h3>
                  <h3 className="text-base mt-2 text-center">COMING SOON</h3>
                  {/* <Table
                    aria-label="Example table with dynamic content"
                    className="w-full mt-4"
                  >
                    <TableHeader columns={columns}>
                      {(column) => (
                        <TableColumn key={column.key}>
                          {column.label}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody items={rows}>
                      {(item) => (
                        <TableRow key={item.key}>
                          {(columnKey) => (
                            <TableCell>
                              {getKeyValue(item, columnKey)}
                            </TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
