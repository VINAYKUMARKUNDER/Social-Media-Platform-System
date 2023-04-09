package com.vinay.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vinay.Service.PostService;
import com.vinay.dto.PostDto;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:5500")
public class PostController {
    
	@Autowired
    private PostService postService;

   

    @PostMapping("/")
    public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto) {
        PostDto createdPost = postService.createPost(postDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Long id) {
        PostDto postDto = postService.getPostById(id);
        return ResponseEntity.ok(postDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PostDto> updatePostById(@PathVariable Long id,  @RequestBody PostDto postUpdateDto) {
        PostDto updatedPost = postService.updatePost(id, postUpdateDto);
        return new ResponseEntity<PostDto>(updatedPost,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePostById(@PathVariable Long id) {
        postService.deletePost(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/like")
    public ResponseEntity<PostDto> likePostById(@PathVariable Long id) {
        PostDto likedPost = postService.likePost(id);
        return ResponseEntity.ok(likedPost);
    }

    @PostMapping("/{id}/unlike")
    public ResponseEntity<PostDto> unlikePostById(@PathVariable Long id) {
        PostDto unlikedPost = postService.unlikePost(id);
        return ResponseEntity.ok(unlikedPost);
    }

    @GetMapping("/analytics/posts")
    public ResponseEntity<Long> getTotalPosts() {
        Long totalPosts = postService.getTotalPosts();
        return ResponseEntity.ok(totalPosts);
    }

    @GetMapping("/analytics/posts/top-liked")
    public ResponseEntity<List<PostDto>> getTopLikedPosts() {
        List<PostDto> topLikedPosts = postService.getTopLikedPosts();
        return ResponseEntity.ok(topLikedPosts);
    }
    
    
    @GetMapping("/")
    public ResponseEntity<List<PostDto>> getAllPosts() {
        List<PostDto> topLikedPosts = postService.getAllPosts();
        return ResponseEntity.ok(topLikedPosts);
    }
}

