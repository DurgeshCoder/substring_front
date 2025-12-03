"use client";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import liveBatchesData from "@/data/live-batches.json";

const liveBatches = liveBatchesData as any;

export function LiveBatchNotice() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check configuration and data availability
        const shouldShow = liveBatches.showModal !== false; // Default to true if missing
        const hasData = liveBatches.running.length > 0 || liveBatches.upcoming.length > 0;

        if (shouldShow && hasData) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[600px] border-primary/20 bg-background/95 backdrop-blur-xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-1">
                        🚀 Live Learning <span className="text-primary">Opportunities</span>
                    </DialogTitle>
                    <p className="text-center text-muted-foreground text-sm mb-4">
                        Join our interactive live sessions and master coding.
                    </p>
                </DialogHeader>

                <div className="space-y-6">

                    {/* Currently Running Section */}
                    {liveBatches.running.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <h3 className="font-bold text-lg text-red-500">Currently Running</h3>
                            </div>
                            <div className="space-y-3">
                                {liveBatches.running.map((batch: any) => (
                                    <BatchCard key={batch.id} batch={batch} type="running" />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Upcoming Batches Section */}
                    {liveBatches.upcoming.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <h3 className="font-bold text-lg text-primary">Upcoming Batches</h3>
                            </div>
                            <div className="space-y-3">
                                {liveBatches.upcoming.map((batch: any) => (
                                    <BatchCard key={batch.id} batch={batch} type="upcoming" />
                                ))}
                            </div>
                        </div>
                    )}

                </div>

                <div className="mt-4 text-center">
                    <Button variant="ghost" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground text-xs">
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function BatchCard({ batch, type }: { batch: any, type: 'running' | 'upcoming' }) {
    return (
        <div className={`p-4 rounded-xl border ${type === 'running' ? 'border-red-500/20 bg-red-500/5' : 'border-primary/20 bg-primary/5'} relative overflow-hidden group hover:border-opacity-50 transition-all`}>
            {batch.offer && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                    {batch.offer}
                </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex-1">
                    <h4 className="font-bold text-base mb-2">{batch.courseName}</h4>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1 bg-background/50 px-2 py-1 rounded-md">
                            <Calendar className="w-3 h-3" />
                            {batch.startDate}
                        </div>
                        <div className="flex items-center gap-1 bg-background/50 px-2 py-1 rounded-md">
                            <Clock className="w-3 h-3" />
                            {batch.time}
                        </div>
                    </div>

                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-foreground">{batch.discountedPrice}</span>
                        <span className="text-xs text-muted-foreground line-through">{batch.price}</span>
                    </div>
                </div>

                <div className="flex items-end">
                    <Link href={batch.link} target="_blank" className="w-full sm:w-auto">
                        <Button size="sm" className={`${type === 'running' ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'} w-full`}>
                            {type === 'running' ? 'Join Now' : 'Pre-Book'} <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
