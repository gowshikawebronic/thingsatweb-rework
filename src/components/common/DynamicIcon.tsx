"use client";

import {
  // Common
  ArrowRight, CheckCircle2, Sparkles, Clock, ChevronDown, ChevronUp, ArrowUpRight, Quote,
  // Tech & Services
  Brain, Cpu, Bot, Zap, Network, Globe2, Layers, Code2, Cloud, Settings, Database,
  Search, FileText, ClipboardCheck, Rocket, LineChart, Target, ListTodo,
  // Industries & Features
  Factory, ShoppingBag, Landmark, Activity, ScanEye, TrendingUp, Users, Tag, ShieldCheck,
  Stethoscope, MessageSquare, Mail, Phone,
  // Misc
  Lightbulb, Map, GitMerge, RefreshCw, MessageSquareText, ScanSearch, FolderOpen,
  MessageCircleQuestion, Languages, TableProperties, Scan, Image as ImageIcon, ScanFace,
  AlertTriangle, Video, Cuboid, UserMinus, Wrench, Banknote, ShieldAlert, Workflow,
  Settings2, FlaskConical, BarChart3, BookOpen
} from "lucide-react";

const Icons: Record<string, any> = {
  // General
  ArrowRight, CheckCircle2, Sparkles, Clock, ChevronDown, ChevronUp, ArrowUpRight, Quote,
  // Core Domain
  Brain, Cpu, Bot, Zap, Network, Globe2, Layers, Code2, Cloud, Settings, Database,
  Search, FileText, ClipboardCheck, Rocket, LineChart, Target, ListTodo,
  // Industries
  Factory, ShoppingBag, Landmark, Activity, ScanEye, TrendingUp, Users, Tag, ShieldCheck,
  Stethoscope, MessageSquare, Mail, Phone,
  // Specific Features
  Lightbulb, Map, GitMerge, RefreshCw, MessageSquareText, ScanSearch, FolderOpen,
  MessageCircleQuestion, Languages, TableProperties, Scan, ImageIcon, ScanFace,
  AlertTriangle, Video, Cuboid, UserMinus, Wrench, Banknote, ShieldAlert, Workflow,
  Settings2, FlaskConical, BarChart3, BookOpen,
  // Fallback
  BrainCircuit: Brain 
};

export const DynamicIcon = ({ name, className, size = 24, strokeWidth = 2 }: { name: string, className?: string, size?: number, strokeWidth?: number }) => {
  const IconComponent = Icons[name] || Layers; // Default to Layers if not found
  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
};