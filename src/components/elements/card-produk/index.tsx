import { Card, CardContent } from "@/components/ui/card"
import { numberFormat } from "@/lib/utils"
import { MapPinIcon } from "@heroicons/react/20/solid"
import { Fragment } from 'react';
import { SkeletonCard } from "./sekeleton";

interface Props {
    data: any[]
  loading: boolean
  onClick : (e : any) => void
}

export default function CardProduk({ data, loading, onClick }: Props) {
    return (
        <section className="flex flex-wrap p-2 gap-4">
        {loading ? (
          Array(9).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          Array.isArray(data) && data.length > 0 ? (
            data.map((item, index: number) => (
              <Fragment key={index}>
                <Card 
                  className="w-[30%] shadow-md hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => onClick(item)}>
                  <img
                    src="https://placehold.co/600x400"
                    className="rounded-t-md"
                    alt=""
                  />
                  <CardContent className="p-2 space-y-1">
                    <h1 className="text-sm">{item.name}</h1>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        {numberFormat(item.price)}
                      </span>
                      <span className="flex items-center text-xs opacity-70">
                        <MapPinIcon className="w-3 text-red-500" />
                        Bandung Barat
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Fragment>
            ))
          ) : (
            <p>No products available.</p>
          )
        )}
      </section>
    )
}