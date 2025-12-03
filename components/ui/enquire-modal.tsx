import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
    courses?: string[];
}

export function EnquireModal({ isOpen, onClose, courseName, courses = [] }: EnquireModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        course: courseName,
    });

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, course: courseName }));
        }
    }, [isOpen, courseName]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `*New Offline Course Enquiry*%0A%0A*Course:* ${formData.course}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;

        window.open(`https://wa.me/919839466732?text=${text}`, '_blank');

        // Reset form and close
        setFormData({ name: "", email: "", phone: "", message: "", course: "" });
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enquire about {formData.course || "Course"}</DialogTitle>
                    <DialogDescription>
                        Fill in your details below and our team will contact you shortly.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="course">Select Course</Label>
                        <Select
                            value={formData.course}
                            onValueChange={(value) => setFormData({ ...formData, course: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                                {courses.map((course) => (
                                    <SelectItem key={course} value={course}>
                                        {course}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Any specific questions?"
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <Button type="submit">Submit Enquiry</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
