"use client";

import { useEffect, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Stock = {
  id: number;
  type: "wine" | "whisky";
  price: number;
  date: string;
  quantity: number;
  client_id: string;
};

type CreateStockRequest = Omit<Stock, "id">;

export default function Home() {
  const [clientId] = useState("111b");
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4001/stocks?client_id=${clientId}`)
      .then((response) => response.json())
      .then(setStocks);
  }, []);

  const columns: ColumnDef<Stock>[] = [
    {
      header: "Stock Type",
      accessorKey: "type",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
    },
    {
      header: "Sale Date",
      accessorKey: "date",
    },
  ];

  const table = useReactTable({
    columns,
    data: stocks,
    getCoreRowModel: getCoreRowModel(),
  });

  const addStock = () => {
    const request: CreateStockRequest = {
      type: "wine",
      price: 100,
      date: new Date().toISOString().split("T")[0],
      quantity: 50,
      client_id: clientId,
    };
    fetch("http://localhost:4001/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((response) => response.json())
      .then((data) => setStocks([...stocks, data]));
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Sell Stock</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <form onSubmit={addStock}>
              <DialogHeader>
                <DialogTitle>Sell Stock</DialogTitle>
                <DialogDescription>
                  Sell additional stock to Ferovinum.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Input
                    id="type"
                    value="wine"
                    className="col-span-3"
                    readOnly
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price
                  </Label>
                  <Input
                    type="number"
                    id="price"
                    min={0}
                    value="10"
                    readOnly
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="quantity" className="text-right">
                    Price
                  </Label>
                  <Input
                    type="number"
                    id="quantity"
                    min={0}
                    value="100"
                    readOnly
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Sell</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
