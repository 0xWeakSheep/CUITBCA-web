import { NextResponse } from 'next/server';
import type { MemberProfile } from '@/types';

// 示例：从后端获取成员数据
// 你可以在这里连接真实的数据库或外部 API
export async function GET() {
  try {
    // TODO: 替换为实际的后端数据源
    // 例如：从数据库获取、从外部 API 获取等
    
    // 示例数据格式
    const members: MemberProfile[] = [
      {
        name: "张明",
        role: "主席",
        bio: "区块链技术爱好者，专注智能合约开发",
        contact: "zhangming@example.com",
        color: "from-blue-400 to-blue-600",
        noiseBackground: "/noise.png",
        linkedin: "https://linkedin.com/in/zhangming", // 可选
        twitter: "https://twitter.com/zhangming", // 可选
        email: "zhangming@example.com", // 可选
        skills: ["Blockchain", "Smart Contracts"], // 可选，如果后端不传则不显示
      },
      {
        name: "李芳",
        role: "副主席",
        bio: "数据分析专家，致力于区块链数据研究",
        contact: "lifang@example.com",
        color: "from-emerald-400 to-emerald-600",
        // 如果没有提供社交链接，则不会显示社交图标
        // 如果没有提供skills，则不会显示技能标签
      },
      // 添加更多成员...
    ];

    return NextResponse.json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}

