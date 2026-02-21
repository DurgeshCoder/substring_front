
export default function Loading() {
    return (
        <div className="container mx-auto p-6 space-y-8 animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm space-y-4">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                        </div>
                        <div className="flex justify-between items-center pt-4">
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
                            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


